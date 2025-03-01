const poems = [
    { title: "Whispers of a Forehead Kiss", content: "Hey little girl,\nIt's time to wake up\nAs I want to look into\nYour dreamy eyes\nFor you love it when I make you feel\nMy safe presence in your life.\n\nI want you to imagine,\nMy lips on your forehead,\nJust near your eyes\nMaking you feel something\nAll over your body and your mind\n\nTingling sensations,\nAll over your skin,\nWith Just a kiss\nIs it for real or just a dream,\nWhen my fingertips\nTraces your soft face\nWith strands of your hair\nSwirled around your ears\nAs if in a loving embrace\n\nI can go even deeper\nBut let me leave you wanting more\nYearning for my words whenever\nYou're All alone\nIn touch with yourself\nThinking about me,\nKissing your forehead. \n\n\n By  Akshun Chaure" },


    { title: "Eternal Touch of Our Souls", content: "Let our love,\nExpand with time,\nLike consciousness,\nWhich is present inside,\nOf our flesh and bones,\nConnecting us on a level,\nDeeper than our souls\n\nWhenever I close my eyes,\nI start to visualise,\nYour non-physical qualities,\nLike kindness and bliss,\nAs something which I can,\nSee, touch and even kiss.\n\nYour love is like your lips,\nSoft, full, and heart-shaped,\nAnd your thought process\nIt is like your beautiful eyes,\nDeep and ever-expanding\nAs if eternal and infinite.\n\n\nBy Akshun Chaure" },

    { title: "The Goddess of My Desire", content: "The girl I'm talking to right now,\nShe's a special lady,\nWith her body and soul full of glow,\nLike that of an auspicious Devi.\n\n She is a symbol of happiness,\n Who radiates positivity,\nResembles the light of the sun\nAnd eliminates the darkness of negativity.\n\nShe's a beautiful princess of love,\nAn angel sent from above,\nWhose smile can make anyone's day,\nAnd impact their lives in a positive way.\n\n\n By Akshun Chaure" }
    
];

let index = 0;
function showNextPoem() {
    if (index >= poems.length) {
        alert("No more poems to display!");
        return;
    }
    let container = document.getElementById("poemContainer");
    document.getElementById("poemTitle").innerText = poems[index].title;
    document.getElementById("poemContent").innerHTML = poems[index].content.replace(/\n/g, '<br>');
    container.style.display = "block";
    index++;
}
