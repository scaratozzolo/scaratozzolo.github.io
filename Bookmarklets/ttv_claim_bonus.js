function claim_bonus(){
  const bonus_button = document.querySelector('[aria-label="Claim Bonus"]');
  if (bonus_button != null){
    bonus_button.click();
    console.log("Claim clicked");
  }else{
    console.log("button not found");
  }
}

claim_bonus()
setInterval(claim_bonus, 60000);

