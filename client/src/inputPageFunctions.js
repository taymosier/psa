export function handleEventNumberChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    eventNumber: e.target.value,
  })
  this.handleChange(e);
}

export function handleEventDateChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    eventName: e.target.value,
  })
  this.handleChange(e);
}

export function handleBartendersChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    bartenders: e.target.value,
  });
  this.handleChange(e);
}

export function handleRoomChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    room: e.target.value,
  });
  this.handleChange(e);
}

export function handleHostBarChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    host: e.target.value,
  });
  this.handleChange(e);
}

export function handleSalesTaxChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    salesTax: e.target.value,
  });
  this.handleChange(e);
}

export function handleServiceChargeChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    serviceCharge: e.target.value,
  });
  this.handleChange(e);
}

export function handleCallLiquorPriceChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    callLiquorPrice: e.target.value,
  });
  this.handleChange(e);
}


export function handlePremiumLiquorPriceChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    premiumLiquorPrice: e.target.value,
  });
  this.handleChange(e);
}

export function handleTopLiquorPriceChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    topLiquorPrice: e.target.value,
  });
  this.handleChange(e);
}

export function handleWellLiquorPriceChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    wellLiquorPrice: e.target.value,
  });
  this.handleChange(e);
}

export function handleChardonnayPriceChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    chardonnayPrice: e.target.value,
  });
  this.handleChange(e);
}

export function handleMerlotPriceChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    merlotPrice: e.target.value,
  });
  this.handleChange(e);
}

export function handleCabernetSauvignonPriceChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    cabernetSauvignonPrice: e.target.value,
  });
  this.handleChange(e);
}

export function handleWhiteZinfandelPriceChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    cabernetSauvignonPrice: e.target.value,
  });
  this.handleChange(e);
}

export function handlePinotGrigioPriceChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    pinotGrigioPrice: e.target.value,
  });
  this.handleChange(e);
}

export function handleChampagnePriceChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    champagnePrice: e.target.value,
  });
  this.handleChange(e);
}

export function handleDomesticBeerPriceChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    domesticBeerPrice: e.target.value,
  });
  this.handleChange(e);
}

export function handleImportBeerPriceChange(e){
  e.preventDefault();
  console.log(e);
  this.setState({
    importBeerPrice: e.target.value,
  });
  this.handleChange(e);
}
