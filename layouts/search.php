<?php
include 'header.php';
?>



<h1 class="text-4xl text-orange-600 font-bold py-8 px-8">Result Page</h1>

<div class="article-container">
    <?php
    if (isset($_POST['submit-search'])) {
        $search = mysqli_real_escape_string($conn, $_POST['search']);
        $sql = "SELECT * FROM store WHERE StoreName LIKE '%$search%' OR StoreLocation LIKE '%$search%' OR StoreOpen LIKE '%$search%' OR StoreClose LIKE '%$search%'";
        $result = mysqli_query($conn, $sql);
        $queryResult = mysqli_num_rows($result);

        if ($queryResult > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                echo "
                <div>
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
    }
    ?>   
</div>
