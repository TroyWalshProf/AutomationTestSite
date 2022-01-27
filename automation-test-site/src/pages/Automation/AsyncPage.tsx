// TODO: Add back in client side javascript
import * as React from "react";
import { Layout } from "../../components/shared/layout";
import "./asyncPage.css";

const AsyncPage = (props: any) => {
  return (
    <Layout title="Async">
      <body
        dangerouslySetInnerHTML={{
          __html: `
    <h2 onload="asyncUpdate()">Async Page</h2>
    <style>
        div.roundedcorners {
            border-radius: 25px;
            border: 2px solid #8AC007;
            padding: 20px;
            width: 200px;
            height: 150px;
        }
    </style>
    <script>
        function asyncUpdate() {
            $("#AsyncContent").hide();
            var lingerTime = (Math.floor(Math.random() * (10 - 1 + 1)) + 1) * 1000;
            var myVar = setInterval(function () { myTimer() }, lingerTime);

            function myTimer() {
                var x = document.getElementById("Selector");
                var option = document.createElement("option");
                option.text = "First";
                x.add(option);
                option = document.createElement("option");
                option.text = "Second";
                x.add(option);
                option = document.createElement("option");
                option.text = "Third";
                x.add(option);
                $("#AsyncContent").show();
                document.getElementById('Label').innerHTML = 'Options';
                $("#LoadingLabel").hide();
                clearInterval(myVar);
            }
        }



        $(document).ready(function () {
            
            $("#loading-div-text").hide();
            var lingerTime = (Math.floor(Math.random() * (10 - 1 + 1)) + 1) * 1000;
            var myVar = setInterval(function () { myOtherTimer() }, lingerTime);

            function myOtherTimer() {
                
                $("#loading-div").hide();
                $("#loading-div-text").show();

                clearInterval(myVar);
            }
        });



    </script>

    <label id="LoadingLabel">Loading...</label>
    <div id="AsyncContent">
        <label id="Label">Loading</label><br />
        <select id="Selector"></select>
    </div>
    <br />
    <div class="roundedcorners">
        <div id="loading-div" class="ui-corner-all">
            <img id="LoadingIconImage" src="~/Content/Images/loading.gif" alt="Loading.." height="50" style="display:block;margin:auto;" />
            
        </div>
        <div id="loading-div-text">
            <p>Loaded</p>
        </div>
    </div>
    <div>

    </div>


      `,
        }}
      />
    </Layout>
  );
};

export default AsyncPage;
