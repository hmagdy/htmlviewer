<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>FormWizard_v1</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="colorlib.com" name="author">

    <!-- MATERIAL DESIGN ICONIC FONT -->
    <link href="fonts/material-design-iconic-font/css/material-design-iconic-font.css" rel="stylesheet">

    <!-- STYLE CSS -->
    <link href="css/style.css" rel="stylesheet">
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery.steps.js"></script>
    <script src="js/main.js"></script>
</head>
<body>
<div class="wrapper">
    <form action="" id="wizard">
        <!-- SECTION 1 -->
        <h2></h2>
        <section>
            <div class="inner">
                <div class="form-content">
                    <div class="form-header">
                        <h3>Slack/Asana/Basecamp Integration</h3>
                    </div>
                    <p>Please fill with your details</p>
                    <div class="form-row">
                        <div class="form-holder">
                            <input class="form-control" id="companyId" placeholder="Company ID" type="text"
                                   value="XDZvDmjZnQE1rFYB">
                        </div>
                        <div class="form-holder">
                            <input class="form-control" id="token" placeholder="Token" type="text"
                                   value="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IlhEWnZEbWpablFFMXJGWUEiLCJyZXYiOjIsImV4cCI6IjIwMTktMDUtMjlUMjE6MjU6MjMrMDA6MDAiLCJkZXYiOiIyMiIsInJvIjoxfQ._tWC4y4RVKbl7TOyoI20rPWh4UMfmjK1agIcXvmId-w">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-holder" style="align-self: flex-end; transform: translateY(4px);">
                            <div class="checkbox-tick">
                                <label class="slack">
                                    <input checked name="gender" type="radio" value="slack">Slack<br>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="asana">
                                    <input name="gender" type="radio" value="asana">Asana<br>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="basecamp">
                                    <input name="gender" type="radio" value="basecamp">BC<br>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <button onclick="doStep(); return false">Add to API</button>
                    <br/>
                    <br/>
                </div>
            </div>
        </section>
        <!-- SECTION 2 -->
        <h2></h2>
        <section>
            <div class="inner">
                <div class="form-content">
                    <div class="form-header">
                        <h3>Registration</h3>
                    </div>
                    <p>Please auth your account and back to here</p>
                    <div class="form-row">
                        <div class="form-holder">
                            Authenticating....Once done .. this page will automatically proceed to next steps.
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <button onclick="cancelStep(); return false">Cancel and Back</button>
                    <br/>
                    <br/>
                </div>
            </div>
        </section>
        <!-- SECTION 3 -->
        <h2></h2>
        <section>
            <div class="inner">
                <div class="form-content">
                    <div class="form-header">
                        <h3>Registration</h3>
                    </div>
                    <p>Send an optional message</p>
                    <div class="form-row">
                        <div class="form-holder w-100">
                            <textarea class="form-control" id="" name="" placeholder="Your messagere here!"
                                      style="height: 99px;"></textarea>
                        </div>
                    </div>
                    <div class="checkbox-circle mt-24">
                        <label>
                            <input checked type="checkbox"> Please accept <a href="#">terms and conditions ?</a>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    </form>
</div>

<!--<iframe id="iframe-id" src="http://localhost:5000/td2-integrations/us-central1/api/iframe"-->
<!--<iframe id="iframe-id" src="https://us-central1-td2-integrations.cloudfunctions.net/api/iframe" style="display: none;">    -->
<!--</iframe>-->

<script>
    // window.onload = function () {
    //
    //     const iframe = document.getElementById('iframe-id');
    //
    //     // iframe.contentWindow.onload = function () {
    //         const ch = new iframe.contentWindow.BroadcastChannel('TD2');
    //         ch.addEventListener('message', function (e) {
    //             console.log('Message:', e.data);
    //             console.log('Message:', e.data.status);
    //             // console.log('Message:', JSON.parse(e.data.users));
    //         });
    //
    //     // }
    // }
    // const ch2 = new BroadcastChannel('TD2');
    // ch2.addEventListener('message', function (e) {
    //     console.log('Message:', e.data);
    // });
</script>


</body>
</html>
