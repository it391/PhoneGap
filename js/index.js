/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var userNumInput = document.getElementById("userNum");

    function getUserInput(){
     return userNumInput.value;
    }

    function luhnCheck(){
        var ccNum = getUserInput(), ccNumSplit = ccNum.split(""), sum = 0;
        var singleNums = [], doubleNums = [], finalArry = undefined;
        var validCard = "Invalid Credit Card Number entered!";

        if((!/\d{15,16}(~\W[a-zA-Z])*$/g.test(ccNum)) || (ccNum.length > 16)){
             return "Invalid Credit Card Number entered!";
        }

        if(ccNum.length === 15){  //american express
             for(var i = ccNumSplit.length-1; i>=0; i--){
                    if(i % 2 === 0){
                         singleNums.push(ccNumSplit[i]);
                    }else{
                         doubleNums.push((ccNumSplit[i] * 2).toString());
                    }
             }
        }else if(ccNum.length === 16){
             for(var i = ccNumSplit.length-1; i>=0; i--){
                    if(i % 2 !== 0){
                         singleNums.push(ccNumSplit[i]);
                    }else{
                         doubleNums.push((ccNumSplit[i] * 2).toString());
                    }
             }
        }

        doubleNums = doubleNums.join("").split("");
        finalArry = doubleNums.concat(singleNums);

        for(var j = 0; j<finalArry.length; j++){
             sum += parseInt(finalArry[j]);
        }

        if(sum % 10 === 0){
             validCard = "Valid Credit Card Number entered!";
        }

        console.log(sum);
        return validCard;
    }

    function whatCard(){

    }

    document.getElementById("submitBtn").addEventListener("click", function(){
     document.getElementById("resultDiv").innerHTML = luhnCheck();
    }, false);
 
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
