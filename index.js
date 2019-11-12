const NEW_HELLO_MESSAGE_EVENT_NAME = "newHelloMessage";

const fetchHelloMessage = async name => {
  try {
    const response = await fetch("http://localhost:5001/hello", {
      method: "post",
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return await response.json();
  } catch (err) {
    throw new Error(err);
  }
};

class HelloMessageDispatcher {
  subscribers = [];

  addSubscriber(elem) {
    this.subscribers.push(elem);
  }

  async nextHelloMessage(name) {
    const helloMessage = await fetchHelloMessage(name);
    const event = new CustomEvent(NEW_HELLO_MESSAGE_EVENT_NAME, {
      detail: helloMessage
    });
    this.subscribers.forEach(subscriber => {
      subscriber.dispatchEvent(event);
    });
  }

  async nextHelloMessage(surnaname) {
    const helloMessage = await fetchHelloMessage(surnaname);
    const event = new CustomEvent(NEW_HELLO_MESSAGE_EVENT_NAME, {
      detail: helloMessage
    });
    this.subscribers.forEach(subscriber => {
      subscriber.dispatchEvent(event);
    });
  }

}

window.onload = function() {
  const helloMessageDispatcher = new HelloMessageDispatcher();

  const displayHelloElem = document.getElementById("display-hello");
  displayHelloElem.addEventListener(NEW_HELLO_MESSAGE_EVENT_NAME, e => {
    displayHelloElem.textContent = e.detail.message;
  });
  helloMessageDispatcher.addSubscriber(displayHelloElem);

  const form = document.getElementById("hello-form");

  form.onsubmit = event => {
    event.preventDefault();

    const formData = new FormData(form);

    let name;
    for (const entry of formData.entries()) {
      if (entry[0] === "name") {
        name = entry[1];
        break;
      }
    }

    helloMessageDispatcher.nextHelloMessage(name);
  };
};
