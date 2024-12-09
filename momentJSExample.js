<html>
<head>
<title>Moment DateTime Format</title>
<!-- reference Moment.js library -->
<script
src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.mi
n.js"></script>
</head>
<body>
<h2>Moment Date</h2>
<!-- container for Moment.js output -->
<div id="displayMoment"></div>
<h2>JavaScript Date</h2>
<!-- container for JavaScript Date output -->
<div id="displayJsDate"></div>
<script type="text/javascript">
(function() {
// instantiate a moment object
let nowMoment = moment();
// instantiate a JavaScript Date object
let nowDate = new Date();
// display value of moment object in #displayMoment div
let eDisplayMoment = document.getElementById('displayMoment');
eDisplayMoment.innerHTML = nowMoment;
// display value of Date object in #displayJsDate div
let eDisplayDate = document.getElementById('displayJsDate');
eDisplayDate.innerHTML = nowDate;
})();
</script>
</body>
</html>