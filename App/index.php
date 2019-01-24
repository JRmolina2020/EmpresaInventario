<?php 
require'../controller/web.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" 
    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <title>App</title>
<style>
div.cardmo{
margin-top: 100px;
}
</style>
</head>
<body>
<!-- contenido -->
<nav class="navbar  navbar-expand-lg  navbar-light" style="background-color: #CC0000;">
<div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="../index.php">lOGIN <span class="sr-only">(current)</span></a>
      </li>
      </ul>
      </div>
</nav>
<div class="container">
<div class="row">
<?php
while ($rsp=$mostrario->fetch_object()){
$nombre = $rsp->nombre;
$imagen = $rsp->imagen;
?>
<div class="col-lg-4 cardmo">
<div class="card" style="width: 15rem;">
  <img class="card-img-top" <?php echo"<img src='../files/articulo/".$imagen."'  width=40 heigth=40>";?>
  <div class="card-body">
    <h5 class="card-title"><?php echo$nombre; ?></h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<?php } ?>
</div>
</div>
<!-- endcontenido -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
</body>
</html>