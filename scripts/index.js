const members = [
  { name: "Peter Quill", id: "peter" },
  { name: "Gamora Titan", id: "gamora" },
  { name: "Drax o Destruidor", id: "drax" },
  { name: "Mantis", id: "mantis" },
  { name: "Rocket", id: "rocket" },
  { name: "Groot", id: "groot" },
];

let activeMember = 0;

const images = document.getElementById("images");
const menu = document.getElementById("menu");
const navigation = document.getElementById("navigation");
const memberName = document.getElementById("member__name");

function changeStatusButtons() {
  const prev = document.getElementById("button__prev");
  const next = document.getElementById("button__next");

  const isFirstMember = activeMember === 0;
  const isLastMember = activeMember === members.length - 1;

  prev.disabled = isFirstMember;
  next.disabled = isLastMember;
}

function changeMember(memberId) {
  activeMember = memberId;
  const member = members[activeMember];

  images.style.transform = `translateY(${-100 * activeMember}vh)`;
  memberName.classList = member.id;
  changeName(member.name);

  changeStatusButtons();
}

function navigationMember(direction) {
  changeMember(activeMember + direction);
}

function changeMenu() {
  menu.classList.toggle("active");
  navigation.classList.toggle("active");
}

function setMember(memberId) {
  changeMember(memberId);
}
