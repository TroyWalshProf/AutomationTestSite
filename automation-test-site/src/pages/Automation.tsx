import React, { useEffect } from "react";
import { Layout } from "../components/shared/layout";
import { useScripts } from "../hooks/script-hooks";

const javascript = [
  `
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
$(document).ready(function () {
  $("#disabledField").children().prop('disabled', true);
})
$(document).ready(function () {
  $("#loading-div-background").css({ opacity: 0.8 });
  $("#loading-div").css({ opacity: 1.0 });
  $("#loading-div-background").hide();
  $("#loading-div").hide();
  
});

$(document).ready(function () {
  var rightClickSpace = document.getElementById("rightclickspace");
  rightClickSpace.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    var ctxMenu = document.getElementById("rightclickmenu");
    ctxMenu.style.display = "block";
    ctxMenu.style.left = (event.pageX) + "px";
    ctxMenu.style.top = (event.pageY) + "px";
  }, false);
  var pageBody = document.getElementById("body");
  pageBody.addEventListener("click", function (event) {
    var ctxMenu = document.getElementById("rightclickmenu");
    ctxMenu.style.display = "";
    ctxMenu.style.left = "";
    ctxMenu.style.top = "";
  }, false);
});
function ShowProgressAnimation() {
  $("#loading-div-background").show();
  $("#loading-div").show();
}
function HideProgressAnimation() {
  $("#loading-div-background").hide();
  $("#loading-div").hide();
}
function OpenDialog() {
  $("#dialog-message").dialog({
    modal: true,
    buttons: {
      Ok: function () {
        $(this).dialog("close");
      }
    }
  });
};

$(function () {
  $("#datepicker").datepicker({
    showOn: "button",
    buttonImage: "/Content/Images/calendar.gif",
    buttonImageOnly: true,
    buttonText: "Select date"
  });
});
$(function () {
  $("#slider").slider({
    min: 1,
    max: 10,
    value: 2,
    slide: function (event, ui) {
      $("#sliderNumber").val(ui.value);
    }
  });
  $("#sliderNumber").val($("#slider").slider("value"));
});
`,
  `$(function () {
  $("#draggable").draggable();
  $("#droppable").droppable({
      drop: function (event, ui) {
          $(this).find("p").html("<div id=\\\"DROPPED\\\">Dropped</div>");
      }
  });
  $("#droppable").droppable({
      out: function (event, ui) {
          $(this).find("p").html("<div id=\\\"OUT\\\">Out</div>");
      }
  });
  $("#droppable2").droppable({
      drop: function (event, ui) {
          $(this).find("p").html("<div id=\\\"DROPPED\\\">Dropped</div>");
      }
  });
  $("#droppable2").droppable({
      out: function (event, ui) {
          $(this).find("p").html("<div id=\\\"OUT\\\">Out</div>");
      }
  });
});
`,
];

const Automation = (props: any) => {
  useScripts(...javascript);

  const AutomationInner = (props: any) => {
    return (
      <html
        dangerouslySetInnerHTML={{
          __html: `
      <body id="body">
      
      <style type="text/css">
          #rightclickmenu{
              display:none;
              z-index:100;
              position:absolute;
              border:1px solid;
              background-color:white;
              width:100px; 
              text-align:center;
          }
          #rightclickspace{
              width:100px;
              height:100px;
              background-color:green;
              border:5px solid black;
          }
          #loading-div-background {
              display: none;
              position: fixed;
              top: 0;
              left: 0;
              background-color: gray;
              width: 100%;
              height: 100%;
              z-index: 1;
          }
  
          #loading-div {
              width: 300px;
              height: 200px;
              background-color: darkgray;
              color: black;
              text-align: center;
              position: absolute;
              left: 50%;
              top: 50%;
              margin-left: -150px;
              margin-top: -100px;
              z-index: 2;
          }
  
          #div1, #div2 {
              float: left;
              width: 140px;
              height: 55px;
              margin: 0px 0px 0px 20px;
              padding: 0px;
              border: 1px solid #aaaaaa;
          }
  
          #HTML5 {
              margin: 0px;
              padding: 10px;
          }
  
          #html4 {
              height: 220px;
              margin: 0px;
              padding: 10px;
          }
  
          #draggable {
              width: 50px;
              height: 50px;
              padding: 0.5em;
              float: left;
              margin: 10px 10px 10px 0;
              border: 1px solid #aaaaaa;
          }
  
          #droppable, #droppable2 {
              width: 150px;
              height: 150px;
              padding: 0.5em;
              float: left;
              margin: 10px;
              border: 1px solid #aaaaaa;
          }
  
          #slider{
              width:200px;
          }
  
      </style>
  
      <h2>Elements to be automated</h2>
      <ul style="list-style-type:none;padding:0px;margin:0px;">
          <li id="ErrorPageLink">@Html.ActionLink("500 Error page", "ErrorPage", "Automation")</li>
          <li id="AsyncPageLink"><a href="/Automation/AsyncPage">Async page</a></li>
          <li id="SwaggerPageLink">@Html.ActionLink("Swagger API", "", "Swagger")</li>
      </ul>
  
      <div id="ItemsToAutomate">
          <br />
          <button id="showDialog1" onclick="ShowProgressAnimation();">Show dialog</button>
          <br />
          <br />
          <button id="showDialog2" onclick="OpenDialog()">Show dialog 2</button>
          <br />
          <br />
          <button onclick="alert('Simple Javascript Alert')" id="javascriptAlertButton">Javascript Alert</button>
          <br />
          <br />
          <button onclick="confirm('Simple Javascript Alert')" id="javascriptConfirmAlertButton">Alert with confirm</button>
          <br />
          <br />
          <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
              Bootstrap Modal
          </button>
  
  
          <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div class="modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                      </div>
                      <div class="modal-body">
                          ...
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                  </div>
              </div>
          </div>
  
  
  
          <div id="loading-div" class="ui-corner-all">
              <img id="LoadingImage" src="~/Content/Images/loading.gif" alt="Loading.." height="20" />
              <h2 id="PleaseWaitText" style="color:gray;font-weight:normal;">Please wait....</h2>
              <button id="CloseButtonShowDialog" onclick="HideProgressAnimation()" value="Close" style="height:50px;width:100px;color:black">Close</button>
          </div>
  
          <div id="dialog-message" title="Download complete" style="display:none;">
              <p>
                  <span class="ui-icon ui-icon-circle-check" style="float:left; margin:0 7px 50px 0;"></span>
                  Your files have downloaded successfully into the My Downloads folder.
              </p>
              <p>
                  Currently using <b>36% of your storage space</b>.
              </p>
          </div>
  
          <div id="HTML5">
              <p id="html5Text" style="width: 100%;font-weight: bold">HTML 5</p>
              <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
                  <img src="~/Content/Images/dragAndDrop.gif" draggable="true" ondragstart="drag(event)" id="draggablleImageHTML5" alt="W3Schools" />
              </div>
              <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)">
              </div>
          </div>
  
  
          <br />
          <br />
  
  
          <div id="html4">
              <p id="html4Text" style="width: 100%;font-weight: bold">HTML 4</p>
              <div id="draggable" class="ui-widget-content ui-draggable ui-draggable-handle" style="position: relative;">
                  <p>Drag</p>
              </div>
              <div id="droppable" class="ui-widget-header ui-droppable">
                  <p>Drop here</p>
              </div>
              <div id="droppable2" class="ui-widget-header ui-droppable">
                  <p>Drop here</p>
              </div>
          </div>
  
          <br />
          <br />
          <label>Date Picker</label>
          <br />
          <p>Date: <input type="text" id="datepicker"></p>
  
          <br />
          <br />
          
  
          <p>
              <label for="amount">Slider Number:</label>
              <input type="text" id="sliderNumber" readonly style="border:0; color:#f6931f; font-weight:bold;">
          </p>
          <div id="slider"></div>
  
  
  
          <br />
          <br />
  
          <div id="Checkboxes">
              <input id="Checkbox1" type="checkbox" name="Checkbox1" value="Checkbox1" />Checkbox 1<br />
              <input id="Checkbox2" type="checkbox" name="Checkbox2" value="Checkbox2" />Checkbox 2 <br />
          </div>
          <br />
          <div class="radioButtons">
              <form>
                  <input id="MaleRadio" type="radio" name="sex" value="male" checked>Male
                  <br>
                  <input id="FemaleRadio" type="radio" name="sex" value="female">Female
              </form>
          </div>
          <div id="Dropdown" class="control-group position">
              <p><strong><label>Names</label></strong></p>
              <div class="controls">
              <select id="namesDropdown" class="input-xlarge" name="names">
                  <option value="1">Joe</option>
                  <option value="two">Jack</option>
                  <option value="3">Jill</option>
                  <option value="four">Rose</option>
                  <option value="5">John</option>
                  <option value="six">Emily</option>
                  <option value="7">Ashley</option>
               </select>
              </div>
          </div>
          <br />
          <div id="TextFields" class="control-group">
              <p><strong>First name:</strong> <input name="firstname" type="text" /></p>
              <p><strong>Last name:</strong> <input name="lastname" type="text" /></p>
          </div>
  
          <div id="disabledField">
              <input name="disabledfield" type="text" value="Disabled" />
          </div>
          <br />
          <div id="UploadFile" class="control-group">
              <p><strong><label class="control-label" for="photo">Upload Image</label></strong></p>
              <p><input id="photo" class="input-file" name="photo" type="file" /></p>
          </div>
          <div id="Dropdown" class="control-group">
              <p><strong><label>Computer Parts</label></strong></p>
              <div class="controls">
                  <select id="computerParts" class="input-xlarge" multiple="multiple" name="computerParts">
                      <option value="one">Motherboard</option>
                      <option value="two">Power Supply</option>
                      <option value="three">Hard Drive</option>
                      <option value="four">Monitor</option>
                      <option value="five">Mouse</option>
                      <option value="six">Keyboard</option>
                  </select>
              </div>
          </div>
  
          <div id="rightclicktestbox" class="control-group">
              <br />
              <p><strong>Context Menu Box</strong></p>
              <p>Right-click inside green box to show context menu</p>
              <div id="rightclickmenu"><b id="RightClickSaveText">Save</b></div>
              <div id="rightclickspace">
              </div>
          </div>
  
          <table id="FoodTable" class="tsc_table_s13" style="width: 100%;" summary="Table 1" border="1">
              <caption><strong>Clothing Table</strong></caption>
              <thead>
                  <tr>
                      <th style="text-align: justify;" scope="col">Number of items</th>
                      <th scope="col">T-Shirts</th>
                      <th scope="col">Sweaters</th>
                      <th scope="col">Shorts</th>
                      <th scope="col">Jeans</th>
  
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <th scope="row">Matt</th>
                      <td>1</td>
                      <td>2</td>
                      <td>0</td>
                      <td>5</td>
                  </tr>
                  <tr class="odd">
                      <th scope="row">Cole</th>
                      <td>12</td>
                      <td>12</td>
                      <td>2</td>
                      <td>0</td>
                  </tr>
                  <tr>
                      <th scope="row">Troy</th>
                      <td>0</td>
                      <td>21</td>
                      <td>6</td>
                      <td>5</td>
                  </tr>
                  <tr class="odd">
                      <th scope="row">Chance</th>
                      <td>2</td>
                      <td>0</td>
                      <td>4</td>
                      <td>5</td>
                  </tr>
              </tbody>
              <tfoot>
                  <tr>
                      <th scope="row">Total of items</th>
                      <td>15</td>
                      <td>35</td>
                      <td>12</td>
                      <td>15</td>
                  </tr>
              </tfoot>
          </table>
         
  
          <table id="FlowerTable" class="tsc_table_s13" style="width: 100%;" summary="Sample Table" border="1">
              <caption><strong>Flower Table</strong></caption>
              <thead>
                  <tr>
                      <th style="text-align: justify;" scope="col">Flowers</th>
                      <th scope="col">Height</th>
                      <th scope="col">Width</th>
                      <th scope="col">Date Received</th>
                      <th scope="col">Color</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <th scope="row">Roses</th>
                      <td>10 in</td>
                      <td>12 in</td>
                      <td>10/12/2015</td>
                      <td>Red</td>
                      <td><a href="#">Buy</a></td>
                  </tr>
                  <tr class="odd">
                      <th scope="row">Daisies</th>
                      <td>15 ft</td>
                      <td>6 ft</td>
                      <td>9/2/15</td>
                      <td>Yellow</td>
                      <td><a href="#">Buy</a></td>
                  </tr>
                  <tr>
                      <th scope="row">Tulips</th>
                      <td>5 in</td>
                      <td>5 in</td>
                      <td>10/02/2015</td>
                      <td>Purple</td>
                      <td><a href="#">Buy</a></td>
                  </tr>
                  <tr class="odd">
                      <th scope="row">Roses</th>
                      <td>10 in</td>
                      <td>12 in</td>
                      <td>10/12/2015</td>
                      <td>Red</td>
                      <td><a href="#">Buy</a></td>
                  </tr>
              </tbody>
          </table>
      </div>
  
      <script type="text/javascript">
          })
      </script>
  </body>      
      `,
        }}
      />
    );
  };

  return (
    <Layout title="Automation">
      <AutomationInner />
    </Layout>
  );
};

export default Automation;
