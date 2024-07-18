import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Vehicles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Support & Service</a>
              </li> 
            </ul>
          </div>
          <a class="navbar-brand" href="#">Navbar</a>
        </div>
      </nav>
    </div>
  )
}
