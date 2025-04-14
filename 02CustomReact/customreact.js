let cnt = 0;

function customRender(reactElement, container) {
  console.log("rendering.....");

  const domElement = document.createElement(reactElement.type);

  // Set text content
  domElement.textContent = reactElement.children;

  // Set attributes
  for (let prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Append the element to the container
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
    id: "google",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

// Now render into extraDiv instead of #root if desired
customRender(reactElement, mainContainer);
// Create extra div
const extraDiv = document.createElement("div");
extraDiv.setAttribute("id", "extra");

mainContainer.appendChild(extraDiv);

const anotherReactElement = {
  type: "p",
  props: {
    id: "anotherOne",
  },
  children: "This is a paragraph tag that is going ot be rendered",
};

customRender(anotherReactElement, extraDiv);
