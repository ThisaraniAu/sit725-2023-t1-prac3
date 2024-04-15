const cardList = [
    {
        title: "Beagle",
        image: "beagle.jpg",
        link: "About Beagle",
        description: "Not only is the Beagle an excellent hunting dog and loyal companion, it is also happy-go-lucky, funny, and'thanks to its pleading expression'cute. They were bred to hunt in packs, so they enjoy company and are generally easygoing. There are two Beagle varieties: those standing under 13 inches at the shoulder, and those between 13 and 15 inches"
    },
    {
        title: "Shih Tzu",
        image: "shih-tzu.jpg",
        link: "About Shih Tzu",
        description: "That face! Those big dark eyes looking up at you with that sweet expression! It's no surprise that Shih Tzu owners have been so delighted with this little 'Lion Dog' for a thousand years. Where Shih Tzu go, giggles and mischief follow. Shi Tsu (pronounced in the West 'sheed-zoo' or 'sheet-su'; the Chinese say 'sher-zer'), weighing between 9 to 16 pounds, and standing between 8 and 11 inches, are surprisingly solid for dogs their size."
    },
];
const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
};
const submitForm = () => {
    let formData = {};

    formData.first_name = $("#first_name").val();

    formData.last_name = $("#last_name").val();

    formData.password = $("#password").val();

    formData.email = $("#email").val();

    console.log("Form Data Submitted: ", formData);
};

const addCards = (items) => {

    items.forEach((item) => {
        let itemToAppend =
            '<div class="col s4 center-align">' +
            '<div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
            item.image +
            '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' +
            item.title +
            '<span id="more_vert" class="material-symbols-outlined">more_vert</span></span><p><a href="#">' +
            item.link +
            "</a></p></div>" +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' +
            item.title +
            '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' +
            item.description +
            "</p>" +
            "</div></div></div>";

        $("#card-section").append(itemToAppend);
    });
};


$(document).ready(function () {
    $(".materialboxed").materialbox();
    $("#formSubmit").click(() => {
        submitForm();
    });
    addCards(cardList);

    $(".modal").modal();
});