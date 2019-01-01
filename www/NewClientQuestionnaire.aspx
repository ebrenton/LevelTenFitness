<%@ Page Language="VB" %>

<%@ Import Namespace="System.Net.Mail" %>

<!DOCTYPE html>

<script runat="server">

</script>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Level Ten Fitness - Personal Fitness Questionnaire</title>
    <link rel="stylesheet" type="text/css" href="/stylesheets/default.css" />
    <link rel="stylesheet" type="text/css" href="/stylesheets/menu.css" />

    <%If Request("submitAction") = "submit" Then%>
    <!-- Facebook Conversion Code for Questionnaire Submited -->

    <script>
        (function () {
            var _fbq = window._fbq || (window._fbq = []);
            if (!_fbq.loaded) {
                var fbds = document.createElement('script');
                fbds.async = true;
                fbds.src = '//connect.facebook.net/en_US/fbds.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(fbds, s);
                _fbq.loaded = true;
            }
        })();
        window._fbq = window._fbq || [];
        window._fbq.push(['track', '6022414819717', { 'value': '0.01', 'currency': 'USD' }]);

    </script>

    <noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/tr?ev=6022414819717&amp;cd[value]=0.01&amp;cd[currency]=USD&amp;noscript=1" /></noscript>


    <%End If%>

</head>
<script language="javascript" type="text/javascript">

    function submitForm() {
        //alert(document.getElementById('ncName').value)

        if (document.getElementById("ncName").value == '') {
            alert('Name required\nPlease answer all questions.')
            document.getElementById("ncName").focus();
            return;
        }
        if (document.getElementById("ncPhone").value == '') {
            alert('Telephone # required\nPlease answer all questions.')
            document.getElementById("ncPhone").focus();
            return;
        }
        if (document.getElementById("ncEmail").value == '') {
            alert('Email required\nPlease answer all questions.')
            document.getElementById("ncEmail").focus();
            return;
        }
        if (document.getElementById("ncAge").value == '') {
            alert('Age required\nPlease answer all questions.')
            document.getElementById("ncAge").focus();
            return;
        }
        if (document.getElementById("ncGender").value == '') {
            alert('Gender required\nPlease answer all questions.')
            document.getElementById("ncGender").focus();
            return;
        }
        if (document.getElementById("ncWeight").value == '') {
            alert('Weight required\nPlease answer all questions.')
            document.getElementById("ncWeight").focus();
            return;
        }
        if (document.getElementById("ncHeight").value == '') {
            alert('Height required\nPlease answer all questions.')
            document.getElementById("ncHeight").focus();
            return;
        }
        if (document.getElementById("ncCurrentFitnessLevel").value == '') {
            alert('Current Fitness Level required\nPlease answer all questions.')
            document.getElementById("ncCurrentFitnessLevel").focus();
            return;
        }
        if (document.getElementById("ncWorkoutFreq").value == '') {
            alert('How often do you work out... required\nPlease answer all questions.')
            document.getElementById("ncWorkoutFreq").focus();
            return;
        }
        if (document.getElementById("ncCardio").value == '') {
            alert('What do you do for cardio... required\nPlease answer all questions.')
            document.getElementById("ncCardio").focus();
            return;
        }
        if (document.getElementById("ncResistance").value == '') {
            alert('Are you doing any resistance training... required\nPlease answer all questions.')
            document.getElementById("ncResistance").focus();
            return;
        }
        if (document.getElementById("ncGymActivity").value == '') {
            alert('Do you belong to a gym... required\nPlease answer all questions.')
            document.getElementById("ncGymActivity").focus();
            return;
        }
        if (document.getElementById("ncHealth").value == '') {
            alert('Do you have any health problems... required\nPlease answer all questions.')
            document.getElementById("ncHealth").focus();
            return;
        }
        if (document.getElementById("ncInjuries").value == '') {
            alert('Do you have any injuries... required\nPlease answer all questions.')
            document.getElementById("ncInjuries").focus();
            return;
        }
        if (document.getElementById("ncFavoriteExercise").value == '') {
            alert('What is your favorite type of exercise... required\nPlease answer all questions.')
            document.getElementById("ncFavoriteExercise").focus();
            return;
        }
        if (document.getElementById("ncHealthyDiet").value == '') {
            alert('Do your fell you eat a healthy diet... required\nPlease answer all questions.')
            document.getElementById("ncHealthyDiet").focus();
            return;
        }
        if (document.getElementById("ncGoals").value == '') {
            alert('What goals do you want to meet... required\nPlease answer all questions.')
            document.getElementById("ncGoals").focus();
            return;
        }

        document.getElementById('submitAction').value = 'submit';
        document.getElementById('newClientForm').submit();
    }
    
</script>
<body>
    <table style="width: 100%; height: 100%">
        <tr>
            <td>
                <a href="/"><img src="/images/logoSmall.png" /></a>
            </td>
            <td>
                <font style="font-size:32px;font-family:papy;font-weight:bold">Personal Fitness Questionnaire</font>
            </td>
        </tr>
    </table>
    <%
        Dim showForm As Boolean = True
        
        If Request("submitAction") = "submit" Then
            
            showForm = False
            
            'Response.Write(Request("ncName") & "<br />")
            
            Dim tmpStr As String
            Dim nDate As Date
            Dim x As Integer
            Dim fName As String
            Dim fTxt As String
            
            fTxt = "Submitted: " & Now & vbCrLf & vbCrLf
            fTxt = fTxt & "Name: " & Request("ncName") & vbCrLf
            fTxt = fTxt & "Telephone: " & Request("ncPhone") & vbCrLf
            fTxt = fTxt & "Email: " & Request("ncEmail") & vbCrLf
            fTxt = fTxt & "Age: " & Request("ncAge") & vbCrLf
            fTxt = fTxt & "Gender: " & Request("ncGender") & vbCrLf
            fTxt = fTxt & "Weight: " & Request("ncWeight") & vbCrLf
            fTxt = fTxt & "Height: " & Request("ncHeight") & vbCrLf & vbCrLf
            fTxt = fTxt & "1. How would you categorize your current fitness level?" & vbCrLf
            fTxt = fTxt & Request("ncCurrentFitnessLevel") & vbCrLf & vbCrLf
            fTxt = fTxt & "2. How often do you workout? " & vbCrLf
            fTxt = fTxt & Request("ncWorkoutFreq") & vbCrLf & vbCrLf
            fTxt = fTxt & "3. What do you do for cardio?" & vbCrLf
            fTxt = fTxt & Request("ncCardio") & vbCrLf & vbCrLf
            fTxt = fTxt & "4. Are you doing any resistance training (lifting weights)?" & vbCrLf
            fTxt = fTxt & Request("ncResistance") & vbCrLf & vbCrLf
            fTxt = fTxt & "5. Do you belong to a gym or fitness facility? If so, do you generally take group fitness classes, workout on your own, or both?" & vbCrLf
            fTxt = fTxt & Request("ncGymActivity") & vbCrLf & vbCrLf
            fTxt = fTxt & "6. Do you have any health problems? If so, please list them and any medications you are taking." & vbCrLf
            fTxt = fTxt & Request("ncHealth") & vbCrLf & vbCrLf
            fTxt = fTxt & "7. Do you have any injuries that may restrict you from particular exercises?" & vbCrLf
            fTxt = fTxt & Request("ncInjuries") & vbCrLf & vbCrLf
            fTxt = fTxt & "8. What is your favorite type of exercise? Running, cycling, lifting weights, group fitness classes, cross fit, martial arts, etc." & vbCrLf
            fTxt = fTxt & Request("ncFavoriteExercise") & vbCrLf & vbCrLf
            fTxt = fTxt & "9. Do you feel you eat a fairly healthy diet?" & vbCrLf
            fTxt = fTxt & Request("ncHealthyDiet") & vbCrLf & vbCrLf
            fTxt = fTxt & "10. What goals do you want to meet by working with a trainer?" & vbCrLf
            fTxt = fTxt & Request("ncGoals") & vbCrLf & vbCrLf

            'Write the data to a file for backup
            nDate = Now
            fName = DatePart(DateInterval.Year, nDate)
            tmpStr = DatePart(DateInterval.Month, nDate)
            If Len(tmpStr) = 1 Then tmpStr = "0" & tmpStr
            fName = fName & tmpStr
            tmpStr = DatePart(DateInterval.Day, nDate)
            If Len(tmpStr) = 1 Then tmpStr = "0" & tmpStr
            fName = fName & tmpStr
            tmpStr = DatePart(DateInterval.Hour, nDate)
            If Len(tmpStr) = 1 Then tmpStr = "0" & tmpStr
            fName = fName & tmpStr
            tmpStr = DatePart(DateInterval.Minute, nDate)
            If Len(tmpStr) = 1 Then tmpStr = "0" & tmpStr
            fName = fName & tmpStr
            tmpStr = DatePart(DateInterval.Second, nDate)
            If Len(tmpStr) = 1 Then tmpStr = "0" & tmpStr
            fName = fName & tmpStr
            
            tmpStr = fName
            
            While My.Computer.FileSystem.FileExists(fName)
                x = x + 1
                fName = fName & "_" & x
            End While

            Try
                My.Computer.FileSystem.WriteAllText("c:\inetpub\LevelTenFitness\questionnaireSubmitions\" & fName & ".txt", fTxt, False)
            Catch exc As Exception
                'Response.Write("Error writing file to server")    
            End Try
            
            
            'Send the email
            Dim mail As New MailMessage
            mail.From = New MailAddress("LevelTenFitness_Questionnaire@seielect.com")
            'mail.From = New MailAddress("doNotReply@leveltenfitness.com")
            mail.To.Add("ebrenton@seielect.com")
            mail.To.Add("laurab@nc.rr.com")
            mail.Subject = "New Client Questionnaire Submition"
            mail.Body = fTxt
            
            Dim smtp As New SmtpClient("mail.seielect.com")
            
            Try
                smtp.Send(mail)
                Response.Write("<div style=""text-align:center"">Thank you very much for submitting your information.<br />We will be in touch with you shortly, usually within a day or two.<br /><br /><a href=""http://leveltenfitness.com"">Continue to LevelTenFitness.com</a></div>")
            Catch exc As Exception
                Response.Write("<div style=""text-align:center;border:1px solid red""><br /><b>Oops!!</b><br >There was an error submitting the form.<br /><br />Please copy and paste the text below and email it to me directly at <a href=""mailto:laurab@nc.rr.com"">laurab@nc.rr.com</a><br /><br /></div>")
                Response.Write("<div style=""text-align:left""><pre>" & fTxt & "</pre></div>")
                Response.Write("<div style=""text-align:center;border:1px solid red"">Error: " & exc.ToString() & "</div>")
            End Try

        End If
        
    %>

    <%If showForm Then%>
    <form name="newClientForm" id="newClientForm" action="NewClientQuestionnaire.aspx" method="post">
        <input type="hidden" name="submitAction" id="submitAction" value="" />
        <div style="margin:auto;text-align:center;">
            (Please answer all questions)<br /><br />
            <table style="margin-left: auto;margin-right: auto;">
                <tr>
                    <td style="text-align:right">
                        Name:
                    </td>
                    <td style="text-align:left">
                        <input type="text" style="width:250px" name="ncName" id="ncName" />
                    </td>
                </tr>
                <tr>
                    <td style="text-align:right">
                        Telephone #:
                    </td>
                    <td style="text-align:left">
                        <input type="text" style="width:150px" name="ncPhone" id="ncPhone" />
                    </td>
                </tr>
                <tr>
                    <td style="text-align:right">
                        Email:
                    </td>
                    <td style="text-align:left">
                        <input type="text" style="width:250px" name="ncEmail" id="ncEmail" />
                    </td>
                </tr>
                <tr>
                    <td style="text-align:right">
                        Age:
                    </td>
                    <td style="text-align:left">
                        <input type="text" style="width:100px" name="ncAge" id="ncAge" />
                    </td>
                </tr>
                <tr>
                    <td style="text-align:right">
                        Gender:
                    </td>
                    <td style="text-align:left">
                        <select name="ncGender" id="ncGender">
                            <option value=""></option>
                            <option value="M">M</option>
                            <option value="F">F</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td style="text-align:right">
                        Weight:
                    </td>
                    <td style="text-align:left">
                        <input type="text" style="width:100px" name="ncWeight" id="ncWeight" /> lbs
                    </td>
                </tr>
                <tr>
                    <td style="text-align:right">
                        Height:
                    </td>
                    <td style="text-align:left">
                        <input type="text" style="width:100px" name="ncHeight" id="ncHeight" />
                    </td>
                </tr>
            </table>
            <br />
            <table style="margin-left: auto;margin-right: auto;">
                <tr>
                    <td style="text-align:left;vertical-align:top">
                        <br />1. How would you categorize your current fitness level?
                        <select name="ncCurrentFitnessLevel" id="ncCurrentFitnessLevel">
                            <option value=""></option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td style="text-align:left;vertical-align:top">
                        <br />2. How often do you workout?
                        <br />
                        <textarea name="ncWorkoutFreq" id="ncWorkoutFreq" cols="80" rows="2" maxlength="500"></textarea>
                    </td>
                </tr>
                <tr>
                    <td style="text-align:left;vertical-align:top">
                        <br />3. What do you do for cardio?
                        <br />
                        <textarea name="ncCardio" id="ncCardio" cols="80" rows="2" maxlength="500"></textarea>
                    </td>
                </tr>
                <tr>
                    <td style="text-align:left;vertical-align:top">
                        <br />4. Are you doing any resistance training (lifting weights)?
                        <br />
                        <textarea name="ncResistance" id="ncResistance" cols="80" rows="2" maxlength="500"></textarea>
                    </td>
                </tr>
                <tr>
                    <td style="text-align:left;vertical-align:top">
                        <br />5. Do you belong to a gym or fitness facility? If so, do you generally take group fitness classes, workout on your own, or both?
                        <br />
                        <textarea name="ncGymActivity" id="ncGymActivity" cols="80" rows="2" maxlength="500"></textarea>
                    </td>
                </tr>
                <tr>
                    <td style="text-align:left;vertical-align:top">
                        <br />6. Do you have any health problems? If so, please list them and any medications you are taking.
                        <br />
                        <textarea name="ncHealth" id="ncHealth" cols="80" rows="4" maxlength="1000"></textarea>
                    </td>
                </tr>
                <tr>
                    <td style="text-align:left;vertical-align:top">
                        <br />7. Do you have any injuries that may restrict you from particular exercises?
                        <br />
                        <textarea name="ncInjuries" id="ncInjuries" cols="80" rows="4" maxlength="1000"></textarea>
                    </td>
                </tr>
                <tr>
                    <td style="text-align:left;vertical-align:top">
                        <br />8. What is your favorite type of exercise? Running, cycling, lifting weights, group fitness classes, cross fit, martial arts, etc.
                        <br />
                        <textarea name="ncFavoriteExercise" id="ncFavoriteExercise" cols="80" rows="2" maxlength="500"></textarea>
                    </td>
                </tr>
                <tr>
                    <td style="text-align:left;vertical-align:top">
                        <br />9. Do you feel you eat a fairly healthy diet?
                        <br />
                        <textarea name="ncHealthyDiet" id="ncHealthyDiet" cols="80" rows="2" maxlength="100"></textarea>
                    </td>
                </tr>
                <tr>
                    <td style="text-align:left;vertical-align:top">
                        <br />10. What goals do you want to meet by working with a trainer?
                        <br />
                        <textarea name="ncGoals" id="ncGoals" cols="80" rows="4" maxlength="1000"></textarea>
                    </td>
                </tr>
            </table>
            <input type="button" name="submitButton" id="submitButton" value="Submit" onclick="submitForm()" style="height:30px;width:100px;font-size:16px" />
        </div>
    </form>
    <%End If%>
</body>
</html>
