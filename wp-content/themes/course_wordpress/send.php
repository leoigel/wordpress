<?php

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$agencyCode = $_POST['agencyCode'];
$companyCode = $_POST['companyCode'];
$lastNacompanyCodeme = $_POST['companyCode'];
$leadSourceCode = $_POST['leadSourceCode'];
$leadSourceSecondaryCode = $_POST['leadSourceSecondaryCode'];
$campaign = $_POST['campaign'];
$advertisingApproval = $_POST['advertisingApproval'];
$privacyQuestion = $_POST['privacyQuestion'];
$model = $_POST['model'];
$utmSource = $_POST['utmSource'];
$utmMedium = $_POST['utmMedium'];
$utmTerm = $_POST['utmTerm'];
$utmContent = $_POST['utmContent'];
$utmCampaign = $_POST['utmCampaign'];
$generaldesc = $_POST['generaldesc'];

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://services.lubinski.co.il/test/webtolead/v1/leads',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
      "firstName":"'.$firstName.'",
      "lastName":"'.$lastName.'",
      "email":"'.$email.'",
      "mobile":"'.$mobile.'",
      "agencyCode":"'.$agencyCode.'",
      "companyCode":"'.$companyCode.'",
      "leadSourceCode":'.$leadSourceCode.',
      "leadSourceSecondaryCode":'.$leadSourceSecondaryCode.',
      "campaign":"'.$campaign.'",
      "advertisingApproval":'.$advertisingApproval.',
      "privacyQuestion":'.$privacyQuestion.',
      "model":"'.$model.'",
      "utmSource":"'.$utmSource.'",
      "utmMedium":"'.$utmMedium.'",
      "utmTerm":"'.$utmTerm.'",
      "utmContent":"'.$utmContent.'",
      "utmCampaign":"'.$utmCampaign.'",
      "generaldesc":""
    }',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
echo '{
    "firstName":"'.$firstName.'",
    "lastName":"'.$lastName.'",
    "email":"'.$email.'",
    "mobile":"'.$mobile.'",
    "agencyCode":"'.$agencyCode.'",
    "companyCode":"'.$companyCode.'",
    "leadSourceCode":'.$leadSourceCode.',
    "leadSourceSecondaryCode":'.$leadSourceSecondaryCode.',
    "campaign":"'.$campaign.'",
    "advertisingApproval":'.$advertisingApproval.',
    "privacyQuestion":'.$privacyQuestion.',
    "model":"'.$model.'",
    "utmSource":"'.$utmSource.'",
    "utmMedium":"'.$utmMedium.'",
    "utmTerm":"'.$utmTerm.'",
    "utmContent":"'.$utmContent.'",
    "utmCampaign":"'.$utmCampaign.'",
    "generaldesc":""
  }';
