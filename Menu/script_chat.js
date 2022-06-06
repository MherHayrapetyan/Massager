const icon = document.querySelectorAll(".hw-24");
const Top = document.querySelector(".top");
const TopTwo = document.querySelector(".topTwo");
const filt = document.querySelectorAll(".chatBoxSmallTwoSmallBox")
const Name = document.querySelector(".chatBoxSmallOneChatBox")
const allChat = document.querySelectorAll(".selectChatDropBox")
const creatGroup = document.querySelector(".chatGrupCrate")
const creatGroupBox = document.querySelector(".creatGroupBox")
const ChatBox = document.querySelector(".chatBoxSmallOneChatBox")
const ChatDrop = document.querySelector(".selectChatDrop")
const newChatBox = document.querySelector(".newChatBox")
const newChat = document.querySelector(".chatGrupCrateNewChat")
const createGroup = document.querySelector(".createGroup")
const inviteBox = document.querySelector(".InviteBox")
const addGroupMembers = document.querySelector(".newChatBoxNext")
const finishBox = document.querySelector(".createGroupEnd")
const smile = document.querySelector(".smailBigBox")
const smileBox = document.querySelector(".smileBox")
const smileBoxImg = document.querySelectorAll(".smileBoxHeaderImg")
const searchBigBox = document.querySelector(".searchBigBox")
const searchBigBoxInputBox = document.querySelector(".messageBoxSmallBigBoxCatherineBigBoxSearch")
const searchBigBoxInput = document.querySelector(".messageBoxSmallBigBoxCatherineBigBoxSearchInput")
const recend = document.querySelector(".recendSmil")
const smileysPeople = document.querySelector(".smileysPeopleSmile")
const smileysPeopleSmile = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "🥰", "😗", "🤨", "🤔", "🤩", "🤗", "🙂", "😚", "😙", "😐", "😑", "😶", "🙄", "😏", "😣", "😮", "😥", "😛", "😌", "😴", "🥱", "😫", "😪", "😯", "🤐", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "😤", "😟", "😞", "😖", "😰", "😱", "🥵", "🤬", "😡", "😠", "😷", "🥺", "😈", "👿", "🤠", "👺", "💀", "🤭", "🧐", "🤓", "👻", "☠", "🥳", "👩", "👨", "🧑", "👧", "👦", "🧒", "👶", "👵", "👨‍🦲", "👩‍🦲", "👨‍🦱", "👩‍🦱", "👨‍🦰", "👩‍🦰", "🧓", "👴", "👩‍🦳", "👨‍🦳", "🧔", "👲", "👼", "🤶", "🎅", "👮‍♀️", "👮‍♂️", "🕵️‍♀️", "👳‍♂️", "👳‍♀️", "🤴", "👸", "👩‍🦱", "👩‍🦲", "👨‍🦱", "👩‍🔬", "👩‍✈️", "👨‍🎨", "👩‍🎨", "👩‍🎤", "🧛‍♀️", "🙍‍♀️", "🏃‍♂️", "💃", "🧖‍♂️", "💇‍♂️", "👨‍🦼", "🏃‍♂️", "👨‍🦯", "👩‍🦯", "💇‍♂️", "🤦‍♀️", "🧏‍♂️", "💁‍♂️", "🤷‍♂️", "🤦‍♀️", "🙇‍♂️"]
const animalsNature = document.querySelector(".animalsNatureSmile")
const animalsNatureSmile = ["🙈", "🙉", "🙊", "🐵", "🐶", "🐺", "🐱", "🦁", "🦒", "🐯", "🦛", "🦏", "🦌", "🦮", "🐕‍🦺", "🐩", "🐲", "🐔", "🦄", "🐴", "🦧", "🐎", "🐆", "🦍", "🦓", "🐸", "🐒", "🐅", "🐈", "🐾", "🐼", "🐨", "🐽", "🐕", "🐂", "🦙", "🐄", "🐃", "🐫", "🦘", "🦥", "🐖", "🐏", "🦨", "🦡", "🐑", "🐐", "🐘", "🐁", "🐪", "🐋", "🐳", "🐢", "🐍", "🐬", "🦎", "🐊", "🦈", "🦦", "🐿", "🐇", "🦖", "🦕", "🦔", "🐀", "🐉", "🦆", "🐓", "🦃", "🦅", "🕊", "🦢", "🐣", "🐤", "🐥", "🐧", "🐦", "🦉", "🦚", "🦩", "🦇", "🦋", "🐌", "🕷", "🦂", "🐞", "🐛", "🦟", "🦗", "🧞‍♀️", "🐜", "🧞‍♂️", "🗣", "👥", "🎈"]
const foodDrink = document.querySelector(".foodDrinkSmile")
const foodDrinkSmile = ["🍕", "🍔", "🍟", "🍿", "🌭", "🧂", "🥓", "🥚", "🥯", "🥨", "🥐", "🍞", "🧈", "🥞", "🧇", "🍳", "🥖", "🍖", "🍗", "🧀", "🥗", "🥩", "🍠", "🥙", "🥪", "🥟", "🥠", "🌮", "🥫", "🍱", "🥡", "🌯", "🍤", "🍣", "🦪", "🍜", "🍛", "🍚", "🍙", "🍘", "🍒", "🍓", "🍅", "🌽", "🍎", "🥭", "🏺", "🍋", "🍊", "🍉", "🍈", "🍏", "🍐", "🍹", "🍻", "🍭", "🍨", "🍩", "🥘", "🍲", "🍪", "🎂", "🍰", "🍝", "🍫", "🍓", "🥬", "🥦", "🍆", "🌽", "🌹", "🌲", "🍂", "🍀", "☘", "🥜", "🌷", "🥀", "🌸", "🍉", "🍽", "🥄", "🍴", "🏺", "🥝", "🍡", "🧉", "🍾", "🍯", "🍧", "🧁", "🥧", "🍥", "🍢", "🧆", "🥘", "🍲", "🍝", "🥣", "🍰", "🍨", "🍧", "🍦", "🥮", "🍫", "🍬", "🍡", "🍵", "🍻", "🥂", "🥃", "🧊", "🥤", "🍹", "🍸", "🍷", "🍾", "🍶", "🍇", "🥥", "🥝", "🏺", "🥄", "🌰", "🌷", "🌾", "🍃", "🌳", "🌴", "🌾", "🍁", "🍀", "🍂", "🌲", "🌱", "☘", "🥀"]
const active = document.querySelector(".activeSmile")
const activeSmile = ["🔪", "⚔", "🗡", "🏹", "🛡", "🦯", "🧲", "🧰", "🏆", "🎖", "🏅", "🥉", "🥈", "🥇", "🥋", "🥊", "🎯", "🪁", "🥏", "🎾", "🏸", "🏓", "🏑", "🏏", "🎽", "🤿", "🛶", "🎿", "🛷", "🥅", "🏒", "🥍", "🎣", "⛸", "⛳", "🥌", "🎳", "🎱", "🏉", "🏈", "💄", "💍", "💎", "⚽", "⚾", "🥎", "🏀", "🏐", "💋", "🎓", "🎩", "👒", "⛑", "🧢", "👑", "🩰", "👢", "👡", "👠", "🥿", "🥾", "👟", "👞", "🎒", "🚿", "🛁", "🛏", "🛋"]
const travelPlaces = document.querySelector(".travelPlacesSmile")
const travelPlacesSmile = ["🚗", "🚗", "🚓", "🚕", "🛺", "🚙", "🚌", "🚐", "🚎", "🚖", "🏍", "🛵", "🚔", "🚘", "🛴", "🚲", "🚜", "🚛", "🛹", "🦼", "🚒", "🚒", "🚑", "🚍", "🦽", "🚚", "🏎", "🚉", "🚄", "🚆", "🚊", "🚇", "🚈", "🚝", "🚟", "🚠", "🚞", "🚃", "🚡", "🚂", "🚋", "🚀", "🚁", "💺", "🛬", "🛫", "✈", "🪂", "🛩", "🛸", "🛰", "⛵", "🚤", "🛥", "⛴", "🛳", "🚢", "⚓", "🚏", "⛽", "🚨", "🚥", "🚦", "🚧"]
const object = document.querySelector(".objectSmile")
const objectSmile = ["🧭", "🏔", "⛰", "🌋", "🗻", "🛤", "🏕", "🏞", "🛣", "🏖", "🏜", "🏝", "🏟", "⛪", "🏡", "🏠", "🏚", "🏙", "🏘", "🏗", "🏛", "🕋", "🕌", "🛕", "🕍", "⛩", "🏢", "🏣", "🏤", "🏭", "🏬", "🏫", "🏪", "🏩", "🏨", "🏦", "🏥", "🏯", "🏰", "💒", "🗼", "🌉", "🗽", "🗾", "🎌", "🌇", "🌆", "🌅", "🌄", "🌃", "🌁", "⛺", "⛲", "♨", "💈", "🛎", "🧳", "🪑", "🚪", "🛏", "🛋", "🪒", "🧴", "🧽", "🧼", "🛁", "🚿", "🚽", "🧻", "🧷", "🧹", "🧺", "🧯", "☁", "⛅", "⛈", "🌤", "🌝", "🌫", "🌪", "🌩", "🌨", "🌧", "🌦", "🌥", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌟", "⭐", "🌞", "☀", "🌜", "🌛", "🌚", "🌙", "🌊", "☔", "🌠", "☄", "⛱", "⚡", "🌡", "🌬", "❄", "☃", "🌀", "🌈", "⛄", "🔥", "🌂", "☂", "💧", "🕧", "🕟", "🕞", "🕦", "🕥", "🕝", "🕜", "🕤", "🕣", "🕛", "🕓", "🕔", "🕕", "🕖", "🕗", "🕟", "🕠", "🕘", "🕐", "🕑", "🕙", "🕡", "🕢", "🕚", "🕒", "🔳", "🔲", "👁‍🗨", "🗨", "💬", "🗯", "💭"]
const symbols = document.querySelector(".symbolsSmile")
const symbolsSmile = ["❤", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "💔", "❣", "💕", "💞", "💖", "💗", "💓", "💘", "💝", "💟", "💌", "💢", "💥", "💤", "💦", "💨", "💫", "🕳", "☮", "✝", "☪", "🕉", "☸", "♈", "⛎", "🛐", "☯", "☦", "🕎", "🔯", "✡", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "🈳", "⚛", "♾", "🆔", "♓", "♒", "♑", "🈹", "🈶", "💮", "🉑", "🉐", "㊙", "🈸", "🈚", "🈴", "㊗", "🈺", "🈷", "✴", "🈵", "🈲", "🆚", "⛔", "🆘", "🆎", "🅱", "🅰", "🚼", "🛑", "📛", "❌", "⭕", "🚫", "🔇", "🔕", "🚭", "❕", "❗", "📵", "🔞", "🚱", "🚳", "🚯", "🚷", "❓", "⚜", "〽", "❔", "‼", "☢", "☣", "⁉", "💯", "⚠", "🚸", "🔅", "🔆", "🔰", "♻", "🔱", "🌐", "💠", "✅", "❎", "✳", "❇", "💹", "🈯", "Ⓜ", "🈂", "➿", "🛂", "🛃", "🛄", "🛅", "♿", "📶", "🚮", "🚻", "🚺", "🚹", "🚰", "🅿", "🚾", "🈁", "🆖", "🆗", "🆙", "🆒", "✔", "💲", "💱", "🔘", "™", "®", "©", "➗", "✖", "➖", "➕", "🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "🟤", "⚫", "🟫", "🟫", "🟪", "🟦", "🟩", "🟨", "🟧", "🟥", "⚪", "⬛", "⬜", "◼", "◻", "◾", "◽", "▪", "▫", "🔳", "🔲", "🔻", "🔺", "🔹", "🔷", "🔸", "🔶", "🔙", "🔚", "🔤", "🔡", "🔠", "🔣", "☑", "🔃", "🔛", "🔝", "🔜", "ℹ", "⤵", "⤴", "↩", "↪", "🔄", "↔", "↕", "➡", "⬅", "⬆", "⬇", "↗", "↘", "↙", "↖", "🎦", "⏏", "⏬", "🔽", "⏫", "🔼", "◀", "🔂", "⏹", "⏺", "⏭", "⏮", "⏩", "⏪", "🔀", "🔁", "⏯", "⏸", "▶", "🔢"]
const flag = document.querySelector(".flagSmile")
const flagSmile = ["🏁", "🏳‍🌈", "🏳", "🏴", "🏴‍☠️", "🚩", "📉", "📈", "📇", "🗓", "📝", "🗒", "💼", "📂", "📁", "🗂", "📅", "📆", "🖍", "🖌", "🖊", "🖋", "✒", "✏", "🗳", "📮", "🏏", "🎽", "🤿", "🛶", "🎿", "🛷", "🥅", "🏒", "🥍", "🎣", "⛸", "⛳", "🥌", "🎳", "🎱", "🏉", "🏈", "💄", "💍", "💎", "⚽", "⚾", "🥎", "🏀", "🏐", "💋", "🎓", "🎩", "👒", "⛑", "🧢", "👑", "🩰", "👢", "👡", "👠", "🥿", "🥾", "㊗", "🍔", "🍟", "🍿", "🌭", "🧂", "🥓", "🥚", "🥯", "🥨", "🥐", "🍞", "🧈"]
const imputSmile = document.querySelector(".inputMessig")
const recentTxt = document.querySelector(".recentTxt")
const smileysTxt = document.querySelector(".smileysTxt")
const animalsTxt = document.querySelector(".animalsTxt")
const foodTxt = document.querySelector(".foodTxt")
const activityTxt = document.querySelector(".activityTxt")
const travelTxt = document.querySelector(".travelTxt")
const objectsTxt = document.querySelector(".objectsTxt")
const symbolsTxt = document.querySelector(".symbolsTxt")
const flagsTxt = document.querySelector(".flagsTxt")
const smTextBackg = document.querySelectorAll(".smTextBackg")
const allSmile = document.querySelector(".allSmile")
const openClick = document.querySelectorAll(".openClick")
const OpenClickChat = document.querySelectorAll(".OpenClickChat")
const messageStart = document.querySelector(".messageBoxSmallBigBoxStart")
const plusBox = document.querySelector(".messageBoxSmallBigBoxCatherineBigBoxIconPlusBox")
const plusBoxBtt = document.querySelector(".plusBoxBtt")
const catherineProfileBigBox = document.querySelector(".catherineProfileBigBox")
const messageBoxSmallBigBoxCatherineBigBox = document.querySelector(".messageBoxSmallBigBoxCatherineBigBox")
const groupInfoBigBox = document.querySelector(".groupInfoBigBox")
const groupInfoBigBoxBtt = document.querySelector(".groupInfoBigBoxBtt")
const dropDaunLangTwo = document.querySelectorAll(".dropDaunLangTwo")
const rightBox = document.querySelectorAll(".rightMenuBoxLeftBox")
const openRightMenu = document.querySelectorAll(".openRightMenu")
const rightMenuBox = document.querySelector(".rightMenuBox")
const dropDownLat = document.querySelectorAll(".dropDownLat")
const dropDown = document.querySelectorAll(".dropDown")
const dropDawnListTwo = document.querySelector(".dropDawnListTwo")
const listAutoBox = document.querySelector(".listAutoBox")
const addNewNote = document.querySelector(".addNewNote")
const tasksSpan = document.querySelectorAll(".tasksMenuSmallBoxTwoSpan")
const tasksInput = document.querySelectorAll(".tasksMenuSmallBoxTwoInput")
const listAutoBoxGrac = document.querySelector(".listAutoBoxGrac")
const allBigMenuBox = document.querySelector(".allBigMenuBox")
const bttBox = document.querySelectorAll(".raundBtt")
const bttRaund = document.querySelectorAll(".raundBox")
const notifications = document.querySelector(".notificationsBigBox")
const openNotific = document.querySelector(".openNotific")
const akardionOpenBtt = document.querySelectorAll(".akardionBigSmallBoxOneBtt")
const akardionMenu = document.querySelectorAll(".akardionBigSmallBoxOneMenu")
const messageBox = document.querySelector(".messageBox")
const chatBox = document.querySelector(".chatBox")
const leftMenuBox = document.querySelector(".leftMenuBox")
const catherinMedia = document.querySelector(".catherinMedia")
const groupMedia = document.querySelector(".groupMedia")

//  Top Box

function TopBlock() {
  Top.style.display = "block"
  allBigMenuBox.style.display = "block"
}

function TopNone() {
  Top.style.display = "none"
  TopTwo.style.display = "none"
  allBigMenuBox.style.display = "none"
}

function TopTwoBlock() {
  TopTwo.style.display = "block"
}

function topBtt() {
  newChatBox.style.display = "none"
  createGroup.style.display = "none"
  inviteBox.style.display = "none"
  addGroupMembers.style.display = "none"
  finishBox.style.display = "none"
  Top.style.display = "none"
  TopTwo.style.display = "none"
  ChatDrop.style.display = "none"
  creatGroup.style.display = "none"
  ChatDrop.style.display = "none"
  creatGroup.style.display = "none"
  creatGroupBox.style.opacity = "1"
  groupInfoBigBox.style.display = "none"
  groupInfoBigBoxBtt.style.opacity = "1"
  plusBox.style.display = "none"
  plusBoxBtt.style.opacity = "1"
  dropDownLat.forEach(item => item.classList.remove("flex"))
  rightMenuBox.style.zIndex = "0"
  rightBox.forEach(item => item.style.display = "none")
  openRightMenu.forEach(item => item.style.color = "#B1B1B1")
  rightMenuBox.style.zIndex = "0"
  addNewNote.style.display = "none"
  listAutoBox.style.display = "none"
  listAutoBoxGrac.style.display = "none"
  allBigMenuBox.style.display = "none"
  notifications.style.display = "none"
}

// Left Menu

icon.forEach(function (item, index) {
  item.onclick = function () {
    icon.forEach(function (itemTwo, indexTwo) {
      if (itemTwo == item) {
        item.style.color = "white"
      } else {
        itemTwo.style.color = "rgb(200,200,200)";
      }
    })
  }
})

// chatGrupCrate and selectChatDrop

creatGroupBox.onclick = function () {
  creatGroup.style.display = "block"
  creatGroupBox.style.opacity = ".1"
  TopTwoBlock()
}

ChatBox.onclick = () => {
  ChatDrop.style.display = "block"
  TopTwoBlock()
}

function newChatTwo() {
  newChatBox.style.display = "block"
  creatGroup.style.display = "none"
  creatGroupBox.style.opacity = "1"
  TopBlock()
}

function cancelChatBtn() {
  newChatBox.style.display = "none"
  TopNone()
}

function createChatBtn() {
  createGroup.style.display = "none"
  TopNone()
}

function createGroupTwo() {
  createGroup.style.display = "block"
  creatGroup.style.display = "none"
  creatGroupBox.style.opacity = "1"
  TopBlock()
}

function closeInviteBtt() {
  inviteBox.style.display = "none";
  TopNone()
}

function inviteBoxCreate() {
  inviteBox.style.display = "block";
  creatGroup.style.display = "none"
  creatGroupBox.style.opacity = "1"
  TopBlock()
}

function cancelAddGroupBtn() {
  addGroupMembers.style.display = "none"
  TopNone()
}

function createGroupPrivacHover() {
  addGroupMembers.style.display = "none"
  createGroup.style.display = "block"
}

function groupNext() {
  addGroupMembers.style.display = "block"
  createGroup.style.display = "none"
}

function createGroupFinish() {
  finishBox.style.display = "none"
  TopNone()
}

function createGroupPrivacFinish() {
  finishBox.style.display = "none"
  addGroupMembers.style.display = "block"
}

function createGroupEnterTwoNextTwo() {
  finishBox.style.display = "block"
  addGroupMembers.style.display = "none"
}

//  Chat filter

let friend = Array.from(filt).filter((item) => {
  return item.classList.contains("frend")
})

let groups = Array.from(filt).filter((item) => {
  return item.classList.contains("group")
})

let unread = Array.from(filt).filter((item) => {
  return item.classList.contains("unread")
})

let archived = Array.from(filt).filter((item) => {
  return item.classList.contains("archiv")
})

allChat[0].onclick = () => {
  Name.innerHTML = "All Chats"
  filt.forEach((item) => {
    item.style.display = "flex"
  })
  ChatDrop.style.display = "none"
  TopNone()
}

allChat[1].onclick = () => {
  Name.innerHTML = "Friends"
  filt.forEach((item) => {
    item.style.display = "none"
  })
  friend.forEach((item) => {
    item.style.display = "flex"
  })
  ChatDrop.style.display = "none"
  TopNone()
}

allChat[2].onclick = () => {
  Name.innerHTML = "Groups"
  filt.forEach((item) => {
    item.style.display = "none"
  })
  groups.forEach((item) => {
    item.style.display = "flex"
  })
  ChatDrop.style.display = "none"
  TopNone()
}

allChat[3].onclick = () => {
  Name.innerHTML = "Unread"
  filt.forEach((item) => {
    item.style.display = "none"
  })
  unread.forEach((item) => {
    item.style.display = "flex"
  })
  ChatDrop.style.display = "none"
  TopNone()
}

allChat[4].onclick = () => {
  Name.innerHTML = "Archived"
  filt.forEach((item) => {
    item.style.display = "none"
  })
  archived.forEach((item) => {
    item.style.display = "flex"
  })
  ChatDrop.style.display = "none"
  TopNone()
}

searchBigBox.onclick = () => {
  searchBigBoxInputBox.classList.toggle("messageBoxSmallBigBoxCatherineBigBoxSearchTwo")
  searchBigBoxInput.classList.toggle("block")
}

smile.onclick = () => {
  smileBox.classList.toggle("flex")
}

smileBoxImg.forEach(function (item, index) {
  item.onclick = () => {
    smileBoxImg.forEach(function (itemOne) {
      if (itemOne == item) {
        item.style.background = "#323333"
        itemOne.style.filter = "grayscale(0%)";
      } else {
        itemOne.style.background = "#868686";
        itemOne.style.filter = "grayscale(100%)";
      }
    })
    allSmile.scrollTop = smTextBackg[index].offsetTop - 55
  }
})

allSmile.onscroll = () => {
  smTextBackg.forEach((item, index) => {
    if (allSmile.scrollTop >= item.offsetTop - 55) {
      smileBoxImg.forEach(function (itemOne) {
        if (itemOne == smileBoxImg[index]) {
          smileBoxImg[index].style.background = "#323333"
          itemOne.style.filter = "grayscale(0%)";
        } else {
          itemOne.style.background = "#868686";
          itemOne.style.filter = "grayscale(100%)";
        }
      })
    }
  })
}

class Smile {
  constructor(where, smileOne) {
    this.$div = document.createElement("div")
    this.$div.className = "smile"
    where.appendChild(this.$div);
    this.smileOne = smileOne
    this.$div.innerHTML = smileOne
  }
}

for (i of flagSmile) {
  boxSmile = new Smile(flag, i)
}

for (i of symbolsSmile) {
  boxSmile = new Smile(symbols, i)
}

for (i of objectSmile) {
  boxSmile = new Smile(object, i)
}

for (i of travelPlacesSmile) {
  boxSmile = new Smile(travelPlaces, i)
}

for (i of activeSmile) {
  boxSmile = new Smile(active, i)
}

for (i of smileysPeopleSmile) {
  boxSmile = new Smile(smileysPeople, i)
}

for (i of animalsNatureSmile) {
  boxSmile = new Smile(animalsNature, i)
}

for (i of foodDrinkSmile) {
  boxSmile = new Smile(foodDrink, i)
}

const allSmileSmile = document.querySelectorAll(".smile")
let setSmile = new Set()

allSmileSmile.forEach((item) => {
  item.onclick = () => {
    imputSmile.value += item.innerHTML
    setSmile.add(item.innerHTML)
    recend.innerHTML = ""
    setSmile.forEach(value => {
      recend.innerHTML += value
    });
  }
})

function delImput() {
  imputSmile.value = ""
}

groupInfoBigBoxBtt.onclick = () => {
  groupInfoBigBox.style.display = "block"
  groupInfoBigBoxBtt.style.opacity = ".1"
  TopTwoBlock()
}

function noneGroupInfo() {
  groupInfoBigBox.style.display = "none"
  groupInfoBigBoxBtt.style.opacity = "1"
  TopNone()
}

function closecatherineProfileBigBox() {
  catherineProfileBigBox.classList.remove("flex")
  messageBoxSmallBigBoxCatherineBigBox.style.width = "100%"
}

function openCatherineProfileBigBox() {
  groupInfoBigBox.style.display = "none"
  groupInfoBigBoxBtt.style.opacity = "1"
  TopNone()
  catherineProfileBigBox.classList.add("flex")
  messageBoxSmallBigBoxCatherineBigBox.style.width = "60%"
}

plusBoxBtt.onclick = () => {
  plusBox.style.display = "flex"
  plusBoxBtt.style.opacity = ".1"
  TopTwoBlock()
}

function closeInheritHome() {
  plusBox.style.display = "none"
  plusBoxBtt.style.opacity = "1"
  TopNone()
}

OpenClickChat.forEach((item, index) => {
  item.onclick = () => {
    if (window.screen.width < 1200) {
      messageBox.style.display = "flex"
      rightMenuBox.style.display = "none"
      chatBox.style.display = "none"
      leftMenuBox.style.display = "none"
      messageStart.style.display = "none"
      openClick.forEach((itemTwo) => {
        if (itemTwo == openClick[index]) {
          itemTwo.style.display = "flex"
        } else {
          itemTwo.style.display = "none"
        }
      })
    } else {
      OpenClickChat.forEach((itemOne) => {
        if (item == itemOne) {
          itemOne.style.background = "#665DFE"
        } else {
          itemOne.style.background = "#2D2D2D"
        }
      })
      openClick.forEach((itemTwo) => {
        if (itemTwo == openClick[index]) {
          itemTwo.style.display = "flex"
        } else {
          itemTwo.style.display = "none"
        }
      })
      messageStart.style.display = "none"
    }
  }
})

dropDown.forEach((item, index) => {
  item.onclick = () => {
    dropDownLat[index].classList.toggle("flex")
    TopTwoBlock()
  }
})

function closrigtBox() {
  rightBox.forEach(item => item.style.display = "none")
  TopNone()
  openRightMenu.forEach(item => item.style.color = "#B1B1B1")
}

openRightMenu.forEach(function (item, index) {
  item.onclick = function () {
    openRightMenu.forEach(function (itemTwo, indexTwo) {
      if (itemTwo == item) {
        item.style.color = "#665DFE"
        rightBox[index].style.display = "flex"
      } else {
        itemTwo.style.color = "rgb(200,200,200)";
        rightBox[indexTwo].style.display = "none"
      }
    })
    TopBlock()
    rightMenuBox.style.zIndex = "99"
  }
})

function openAddNewNote() {
  addNewNote.style.display = "block"
  rightMenuBox.style.zIndex = "0"
}

function closeNoteBtt() {
  addNewNote.style.display = "none"
  rightMenuBox.style.zIndex = "99"
}

function dropDawnList() {
  dropDawnListTwo.style.display = "flex"
  console.log(dropDawnListTwo)
}

tasksInput.forEach((item, index) => {
  item.onclick = () => {
    tasksSpan[index].classList.toggle("color")
  }
})

function closeTaskBtt() {
  listAutoBox.style.display = "none"
  rightMenuBox.style.zIndex = "99"
}

function openListBtt() {
  listAutoBox.style.display = "block"
  rightMenuBox.style.zIndex = "0"
}

function closeTaskGarcBtt() {
  listAutoBoxGrac.style.display = "none"
  rightMenuBox.style.zIndex = "99"
}

tasksSpan.forEach(item => {
  item.onclick = () => {
    listAutoBoxGrac.style.display = "block"
    rightMenuBox.style.zIndex = "0"
  }
})

bttBox.forEach(function (item, index) {
  item.onclick = function () {
    if (item.style.left == "19px") {
      item.style.left = "0px"
      item.style.background = "#ADB5BD"
      bttRaund[index].style.background = "white"
    } else {
      item.style.left = "19px"
      item.style.background = "white"
      bttRaund[index].style.background = "#665DFE"
    }
  }
})

openNotific.onclick = () => {
  notifications.style.display = "block"
  TopBlock()
}

function closeNotificationsBtt() {
  notifications.style.display = "none"
  TopNone()
}

akardionOpenBtt.forEach((item, index) => {
  item.onclick = () => {
    akardionMenu[index].classList.toggle("height")
  }
})

function rightMenuOpenMedia() {
  messageBox.style.display = "block"
  rightMenuBox.style.display = "block"
  chatBox.style.display = "none"
  leftMenuBox.style.display = "none"
  messageStart.style.display = "flex"
  catherinMedia.style.display = "none"
  groupMedia.style.display = "none"

}

function menuMediaOpen() {
  messageBox.style.display = "none"
  rightMenuBox.style.display = "none"
  chatBox.style.display = "flex"
  leftMenuBox.style.display = "flex"
  messageStart.style.display = "none"
  catherinMedia.style.display = "none"
  groupMedia.style.display = "none"
}


// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//   navbar.classList.add("sticky")
//   } else {
//   navbar.classList.remove("sticky");
//   }
// }
// setInterval(()=> {
//   // console.log(symbols.offsetTop)
//   let allSmile = document.querySelector(".allSmile")
//   let sticky = allSmile.scrollTop;
// console.log(allSmile.__proto__)
//   console.log(sticky)
//   allSmile.scrollTop = 200
// },1000)
// console.log(sticky)
// window.screen.width < 1200