$(function(){
	$("#wizard").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 500,
        labels: {
            finish: "Submit",
            next: "Forward",
            previous: "Backward"
        }
    });
    $('.wizard > .steps li a').click(function(){
    	$(this).parent().addClass('checked');
		$(this).parent().prevAll().addClass('checked');
		$(this).parent().nextAll().removeClass('checked');
    });
    // Custome Jquery Step Button
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
    // Select Dropdown
    $('html').click(function() {
        $('.select .dropdown').hide(); 
    });
    $('.select').click(function(event){
        event.stopPropagation();
    });
    $('.select .select-control').click(function(){
        $(this).parent().next().toggle();
    })    
    $('.select .dropdown li').click(function(){
        $(this).parent().toggle();
        var text = $(this).attr('rel');
        $(this).parent().prev().find('div').text(text);
    })
    $('.actions').css('display','none')
})


function doStep() {
    let companyId = $("#companyId").val()
    let token = $("#token").val()
    if(token && companyId) {
        let url = 'https://us-central1-td2-integrations.cloudfunctions.net/api/slack/auth?companyId=XDZvDmjZnQE1rFYB&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IlhEWnZEbWpablFFMXJGWUEiLCJyZXYiOjIsImV4cCI6IjIwMTktMDUtMjlUMjE6MjU6MjMrMDA6MDAiLCJkZXYiOiIyMiIsInJvIjoxfQ._tWC4y4RVKbl7TOyoI20rPWh4UMfmjK1agIcXvmId-wsss'
        //let url = 'http://localhost:5000/td2-integrations/us-central1/api/slack/auth?companyId=XDZvDmjZnQE1rFYB&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IlhEWnZEbWpablFFMXJGWUEiLCJyZXYiOjIsImV4cCI6IjIwMTktMDUtMjlUMjE6MjU6MjMrMDA6MDAiLCJkZXYiOiIyMiIsInJvIjoxfQ._tWC4y4RVKbl7TOyoI20rPWh4UMfmjK1agIcXvmId-w';
        window.open(url)
        $(" [href='#next']").click()
    }else{
        alert("Please enter company id and token")
    }
}