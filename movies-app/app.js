$(function(){
    $('form').on('submit', (event) => {
        event.preventDefault()
        const button = $("<span>").text(" ").append($("<button>").text("Remove"))
        const p = $('<p>').text(`Movie: ${$("input[type='text']").val()}, Rating: ${$("input[type='number']").val()}`)
        $("#movies").append(p.append(button))
    })

    $('#movies').on("click", "button", function(){
        $(this).parent().parent().remove()
    })
})