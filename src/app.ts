const button = document.querySelector('button');

function clickHandler(message: string) {
  if (message !== '') {
    console.log(`Clicked! ${message}`);
  }
}

if (button) {
  button.addEventListener(
    'click',
    clickHandler.bind(null, 'Welcome to the App.')
  );
}
