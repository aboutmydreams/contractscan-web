var arrLang = {
    "en": {
        "About": "ABOUT",
        "Download": "Download",
        "Contact": "Contact",
    },
    "zh": {
        "About": "关于",
        "Download": "下载",
        "Contact": "联络我们",
    }
};

// The default language is English
var lang = "en";
// Check for localStorage support
if ('localStorage' in window) {
    var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
    if (!Object.keys(arrLang).includes(lang)) lang = 'en';
}

$(document).ready(function () {
    $(".lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});

// get/set the selected language
$(".translate").click(function () {
    var lang = $(this).attr("id");

    // update localStorage key
    if ('localStorage' in window) {
        localStorage.setItem('lang', lang);
        console.log(localStorage.getItem('lang'));
    }

    $(".lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});