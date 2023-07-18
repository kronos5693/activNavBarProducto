export function navBar(){
    document.querySelector<HTMLDivElement>('#navBar')!.innerHTML = `
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script type="module" src="/src/main.ts"></script>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Productos App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" id="home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page"  href="#" id="productos">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page"  href="#" id="crearProducto">Crear Producto</a>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
<h1></h1>
   
  `

}