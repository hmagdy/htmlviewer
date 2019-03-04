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
    let companyId = $("#companyId").val();
    let token = $("#token").val();
    if(token && companyId) {
        let back_url = "http://localhost/1/back.php";
        let envURL = 'https://us-central1-td2-integrations.cloudfunctions.net'; //prod
        // let envURL = 'http://localhost:5000/td2-integrations/us-central1'; //dev
        let url = `${envURL}/api/slack/auth?companyId=${companyId}&token=${token}&back=${back_url}`
        //let url = 'http://localhost:5000/td2-integrations/us-central1/api/slack/auth?companyId=XDZvDmjZnQE1rFYB&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IlhEWnZEbWpablFFMXJGWUEiLCJyZXYiOjIsImV4cCI6IjIwMTktMDUtMjlUMjE6MjU6MjMrMDA6MDAiLCJkZXYiOiIyMiIsInJvIjoxfQ._tWC4y4RVKbl7TOyoI20rPWh4UMfmjK1agIcXvmId-w';
        // alert(url);
        // console.log(url)
        window.open(url)
        $(" [href='#next']").click()
    }else{
        alert("Please enter company id and token")
    }
}