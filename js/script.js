// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: Apr 2025
// This file contains the JS functions for index.html

function ageCheck() {
  const userAge = parseInt(document.getElementById('user-age').value)

  if (userAge >= 17) {
    document.getElementById('result').innerHTML =
      '<p>You can go see an R rated movie alone.</p>'
  }
  
    else if (userAge >= 13) {
    document.getElementById('result').innerHTML =
      '<p>You can go see a PG-13 movie alone.</p>'
  }

    else if (userAge >= 5) {
    document.getElementById('result').innerHTML =
      '<p>You can go see a G or PG movie alone.</p>'
  }

  else {
    document.getElementById('result').innerHTML =
      '<p>You are too young to see most things.</p>'
  }
}
