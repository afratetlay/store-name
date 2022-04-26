<?php
require 'includes/dbh-inc.php';

error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
<header>
     <nav class="flex items-center py-4 px-8 border-b border-indigo-500">
         <div class="py-1">
             <h1 class="text-orange-600 text-2xl"><span class="font-bold">Sainsbury's</span> Store Locator</h1>
         </div>
         <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue text-xs">
             <li class="cursor-pointer font-medium">Go to Sainsburys.co.uk</li>
             <li class="cursor-pointer">Jobs</li>
         </ul>

     </nav>
 </header>


<?php

    // $sql = "SELECT * FROM store;";
    // $result = mysqli_query($conn, $sql);
    // $resultCheck = mysqli_num_rows($result);

    // if($resultCheck > 0) {
    //     while ($row = mysqli_fetch_assoc($result)) {
    //         echo $row ['StoreName'] . "<br>";
    //     }
    // }


    // Create Query
    $query = 'SELECT * FROM store';
    // Get Result
    $result = mysqli_query($conn, $query);
    // Fetch Data
    $store = mysqli_fetch_all($result, MYSQLI_ASSOC);
    // var_dump($store);
    // Free Result
    mysqli_free_result($result);
    // Close Connection 
    // mysqli_close($conn);

?>


<div class="grid grid-cols-2 gap-4 grid-flow-row-dense">
    <form method="POST" action="">
    <div class="py-8 px-8">
        <div class="flex">
            <div class="mb-3 xl:w-96">
                <div class="input-group relative flex items-stretch w-full mb-4">
                <input type="text" name="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
                <button class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="submit" name="submit-search" id="button-addon2" target="_blank">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                </button>
                </div>
            </div>
        </div>
    </form>

    

<div class="article-container">
    <?php
    
    if (isset($_POST['search'])) { // if we go on the webpage and we click on the search button, then it will run what is in the IF statement
        $search = mysqli_real_escape_string($conn, $_POST['search']);
        $sql = "SELECT * FROM store WHERE StoreName LIKE '%$search%' OR StoreLocation LIKE '%$search%' OR StoreOpen LIKE '%$search%' OR StoreClose LIKE '%$search%'"; // select all from store (phpMyAdmin) 
        $result = mysqli_query($conn, $sql); // variable to result, we connect to the DB and the SQL variable above
        $queryResult = mysqli_num_rows($result); // variable, check rows of result we will get from sql variable 

        if ($queryResult > 0) { // the variable is greater than 0 (if we have some result) then we will run the code that is in the IF statement 
            while ($row = mysqli_fetch_assoc($result)) { // the code in the IF Statement is a while loop, keeps spitting out all of the different stores that are in the DB, contains all of the results in the DB
                echo "
                <div>
                <h1 class='text-4xl text-orange-600 font-bold py-8 px-8'>Result Page</h1>
                <div class='text-slate-800 border-b border-indigo-500 py-8 px-8'>
                <h3 class='font-bold pt-2 text-orange-600'>Store Name</h3>
                <h3 class=''>".$row['StoreName']."</h3>
                <h3 class='font-bold pt-2 text-orange-600'>Address</h3>
                <p class='pb-4'>".$row['StoreLocation']."</p>
                <h3 class='font-bold pb-4 text-orange-600'>Opening Times</h3>
                <p class='pb-4'>".$row['StoreOpen']. ' - ' . $row['StoreClose'] ."</p></span>
                </div>
                </div>";
            }
        }else{
            echo "
            <div class='py-8 px-8 text-orange-600 font-bold'>
            <p>There are no results matching your results!</p>
            </div>
            ";
        }
    } else {
         foreach($store as $post) : ?>
            <div class="text-slate-800 border-b border-indigo-500">
                <h1 class="font-bold pb-4 pt-2"><?php echo $post['StoreName']; ?></h1>
                <p class="pb-4"><?php echo $post['StoreLocation']; ?></p>
                <p class="font-bold pb-4"><?php echo $post['StoreOpen']; ?> - <?php echo $post['StoreClose']; ?> </p>
            </div>
        <?php endforeach; 
    }
    ?>   
</div>



    <!-- <div class="article-container">
     
    </div> -->



    <?php foreach($store as $post) : ?>
        <div class="text-slate-800 border-b border-indigo-500">
            <h1 class="font-bold pb-4 pt-2"><?php echo $post['StoreName']; ?></h1>
            <p class="pb-4"><?php echo $post['StoreLocation']; ?></p>
            <p class="font-bold pb-4"><?php echo $post['StoreOpen']; ?> - <?php echo $post['StoreClose']; ?> </p>
        </div>
    <?php endforeach; ?>

       
    </div>
    <div id="map" class=>
    </div>
</div>


<script>

    var stores = <?php echo json_encode($store); ?>;
   
    function initMap(){  
      
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: {lat:53.47949535, lng:-2.24160009}

        });

        stores.forEach(function (store) {
            var position = {
                lat: Number(store.Longitude),
                lng: Number(store.Latitude)
            };
            var marker = new google.maps.Marker({
                position: position,
                map: map
            });

            const infowindow = new google.maps.InfoWindow({
                content: `<h1 class="font-bold pb-4 pt-2">${store.StoreName}</h1>
                <p class="pb-4">${store.StoreLocation}</p>
                <p class="font-bold pb-4">${store.StoreOpen} - ${store.StoreClose}</p>`,
            })

            marker.addListener("click", () => {
                infowindow.open(map, marker);
            })
        });

    }

</script>
<script async defer src="https://maps.google.com/maps/api/js?key=AIzaSyBAcLVB2kQl1fSi8aUy4IVOkbHPvl1bQx8&callback=initMap">

</script>
</body>
</html>