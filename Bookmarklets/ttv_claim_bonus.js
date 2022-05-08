function claim_bonus(){
  const bonus_button = document.querySelector('[aria-label="Claim Bonus"]');
  if (bonus_button != null){
    bonus_button.click()
  }
}

setInterval(claim_bonus, 180000);

