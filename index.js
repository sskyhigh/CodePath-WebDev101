let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

themeButton.addEventListener("click", toggleDarkMode);

// const toggle = document.getElementById('toggle');
// const body = document.body;

// toggle.addEventListener('input', e => {
//     const isChecked = e.target.checked;

//     if (isChecked) {
//         body.classList.add('dark-theme');
//     } else {
//         body.classList.remove('dark-theme');
//     }
// });

// Get the form and the signatures section
const form = document.getElementById("sign-petition");
const signaturesSection = document.querySelector(".signatures");

// Get the sign-now button and add an event listener

const addSignature = (event) => {
  event.preventDefault();

  const name = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const hometown = document.getElementById("hometown").value;

  let newSignature = document.createElement("p");
  newSignature.innerHTML = `🖊️ ${name} from ${hometown} supports this.`;

  // this adds the information to the petition form list.
  signaturesSection.appendChild(newSignature);
  //   console.log(hometown);

  //clears the boxes after someone has submitted
  form.reset();

  //   select all info from .signatures, get all its elements
  //   Get the array (length) of the elements and display it,
  //   I think this is more effective
  let getNumber = document.querySelector(".signatures");
  let numberOfPeopleSigned = getNumber.getElementsByTagName("p").length - 1;

  let oldCounter = document.getElementById("counter");
  oldCounter.remove();

  // create new counter element
  const newCounter = document.createElement("p");
  newCounter.id = "counter";
  newCounter.innerHTML = `🖊️ ${numberOfPeopleSigned} people have signed this petition and support this cause.`;

  // updates counter
  signaturesSection.appendChild(newCounter);
};

const signNowButton = document.getElementById("sign-now-button");

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs

  // TODO: Validate the value of each input

  // TODO: Call addSignature() and clear fields if no errors

  let email = document.getElementById("email");
  for (let i = 0; i < petitionInputs.length; ++i) {
    const input = petitionInputs[i];
    const val = input.value.trim();

    if (val.length < 2) {
      containsErrors = true;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  }

  
  if (!containsErrors) {
    // addSignature(event);
    // for(let i = 0; i<petitionInputs.length; ++i){
    //     petitionInputs[i].value = "";
    // }
    let email = document.getElementById("email");
    if (email.value.endsWith("com")) {
      addSignature(event);
      for (let i = 0; i < petitionInputs.length; ++i) {
        petitionInputs[i].value = "";
      }
    }
  }
};

signNowButton.addEventListener("click", validateForm);

  let animation = {
    revealDistance: 150,
    initialOpacity: 0,
    transitionDelay: 0,
    transitionDuration: "2s",
    transitionProperty: "all",
    transitionTimingFunction: "ease",
  };

  let secondAnimation = {
    revealDistance: 0,
    initialOpacity: 0,
    transitionDelay: 0,
    transitionDuration: "0s",
    transitionProperty: "all",
    transitionTimingFunction: "ease",
  };

  const reveal = () => {
    for (let i = 0; i < revealableContainers.length; ++i) {
      let windowHeight = window.innerHeight;
      let topOfReveableContainer =
        revealableContainers[i].getBoundingClientRect().top;

      if (topOfReveableContainer < windowHeight - animation.revealDistance) {
        revealableContainers[i].style.opacity = 1;
        revealableContainers[i].style.transform = `translateY(0)`;
      } else {
        revealableContainers[i].style.opacity = animation.initialOpacity;
        revealableContainers[
          i
        ].style.transform = `translateY(${animation.revealDistance}px)`;
      }
    }
  };

  const revealableContainers = document.querySelectorAll(".revealable");
  for (let i = 0; i < revealableContainers.length; ++i) {
    window.addEventListener("scroll", reveal);
  }

  signNowButton.addEventListener("click", validateForm);

  let selectMotion = document.getElementById("reduce-motion");

  const reduceMotion = () => {
    console.log("hi");
    for (let i = 0; i < revealableContainers.length; ++i) {
      let windowHeight = window.innerHeight;
      let topOfReveableContainer =
        revealableContainers[i].getBoundingClientRect().top;

      if (
        topOfReveableContainer <
        windowHeight - secondAnimation.revealDistance
      ) {
        revealableContainers[i].style.opacity = 1;
        revealableContainers[i].style.transform = `translateY(0)`;
      } else {
        revealableContainers[i].style.opacity = secondAnimation.initialOpacity;
        revealableContainers[
          i
        ].style.transform = `translateY(${secondAnimation.revealDistance}px)`;
      }
    }
  };

  selectMotion.addEventListener("click", reduceMotion);

  const toggleModal = (person) => {
    const modal = document.getElementById("thanks-modal");
    const modalContent = document.getElementById("thanks-content-modal");
    modal.style.display = "flex";
    modalContent.textContent = `Thank you so much ${person}`;

    const intervalId = setInterval(scaleImage, 500);

    setTimeout(() => {
      clearInterval(intervalId); // Clear the interval
      modal.style.display = "none";
    }, 4000);
  };

  let scaleFactor = 1;
  let modalImage = document.querySelector(".congratulations");

  const scaleImage = () => {
    scaleFactor = scaleFactor === 1 ? 0.8 : 1;
    modalImage.style.transform = `scale(${scaleFactor})`; // Update the style on each interval
  };
