//Exercise of the day api app
// target , name,gifurl

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://exercisedb.p.rapidapi.com/exercises",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
		"X-RapidAPI-Key": "f9eb3c1704msh0695465e449c66dp16e1c1jsnfcccb71d537f"
	}
};

$.ajax(settings).done(function (response) {
	//console.log(response);
    const $button = $('button').on('click', () => {
      clearimage()
      
      let randomNameIndex = Math.floor(Math.random() * response[250].name.length)
      let selectedExcercise = response[randomNameIndex]
      //console.log(selectedExcercise)

        const $gif = $('<img id="eotd">')
        $gif.attr('src', selectedExcercise.gifUrl) 
        $gif.attr('alt', selectedExcercise.name)
        $gif.appendTo('.image-container')


        $('#exerciseName').html(`${selectedExcercise.name}`)
        $('#muscleWorked').html(`${selectedExcercise.target}`)
      //generate randomly w/ button click
    })
  
});

const settingss = {
    "async": true,
    "crossDomain": true,
    "url": "https://type.fit/api/quotes",
    "method": "GET"
  }
  
  $.ajax(settingss).done(function (response) {
    const data = JSON.parse(response);
    //console.log(data);

    let randomIndex = Math.floor(Math.random() * data[10].text.length)
    // console.log(randomIndex)
    let selectedQuote = data[randomIndex]

    $('#motivationalQuote').html(`"${selectedQuote.text}" - ${selectedQuote.author}`)
    //generate randomly w/o button click
    
  });

  function clearimage() {
    $('.image-container').html('')
  }
 


 