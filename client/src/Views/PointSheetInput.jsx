import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {handleEventNumberChange, handleEventDateChange,  handleBartendersChange,
        handleRoomChange, handleHostBarChange, handleSalesTaxChange, handleServiceChargeChange,
        handleCallLiquorPriceChange, handlePremiumLiquorPriceChange, handleTopLiquorPriceChange,
        handleWellLiquorPriceChange, handleChardonnayPriceChange, handleMerlotPriceChange,
        handleCabernetSauvignonPriceChange, handleWhiteZinfandelPriceChange, handlePinotGrigioPriceChange,
        handleChampagnePriceChange, handleDomesticBeerPriceChange, handleImportBeerPriceChange} from '../inputPageFunctions.js';

// TODO
// Add onChange handler for Cash Collected input


export class PointSheetInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      eventNumber: 'Ballers Bar',
      eventDate: '10/24/2018',
      bartenders: 'Taylor Mosier, Candice Overcash',
      room: 'Exhibit Hall B',
      host: 'n',
      salesTax: '7',
      serviceCharge: '21',
      cashCollected: '1400.00',
      callLiquorPrice: '6',
      premiumLiquorPrice: '7',
      topLiquorPrice: '9',
      wellLiquorPrice: '5',
      chardonnayPrice: '5',
      merlotPrice: '5',
      cabernetSauvignonPrice: '5',
      pinotGrigioPrice: '5',
      whiteZinfandelPrice: '5',
      champagnePrice: '5',
      domesticBeerPrice: '4',
      importBeerPrice: '5'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEventNumberChange = handleEventNumberChange.bind(this);
    this.handleEventDateChange = handleEventDateChange.bind(this);
    this.handleBartendersChange = handleBartendersChange.bind(this);
    this.handleRoomChange = handleRoomChange.bind(this);
    this.handleHostBarChange = handleHostBarChange.bind(this);
    this.handleSalesTaxChange = handleSalesTaxChange.bind(this);
    this.handleServiceChargeChange = handleServiceChargeChange.bind(this);
    this.handleCallLiquorPriceChange = handleCallLiquorPriceChange.bind(this);
    this.handlePremiumLiquorPriceChange = handlePremiumLiquorPriceChange.bind(this);
    this.handleTopLiquorPriceChange = handleTopLiquorPriceChange.bind(this);
    this.handleWellLiquorPriceChange = handleWellLiquorPriceChange.bind(this);
    this.handleChardonnayPriceChange = handleChardonnayPriceChange.bind(this);
    this.handleMerlotPriceChange = handleMerlotPriceChange.bind(this);
    this.handleCabernetSauvignonPriceChange = handleCabernetSauvignonPriceChange.bind(this);
    this.handleWhiteZinfandelPriceChange = handleWhiteZinfandelPriceChange.bind(this);
    this.handlePinotGrigioPriceChange = handlePinotGrigioPriceChange.bind(this);
    this.handleChampagnePriceChange = handleChampagnePriceChange.bind(this);
    this.handleDomesticBeerPriceChange = handleDomesticBeerPriceChange.bind(this);
    this.handleImportBeerPriceChange = handleImportBeerPriceChange.bind(this);
  }

  handleChange(e){
    // console.og(e.target.value)
    let state = this.state;
    state[`${e.target.name}`] = e.target.value
    this.setState({state})
    this.props.handleInputChange(state)
  }

  render(){
    return(
      <Form>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 1}} xs={{ size: 12, offset: 0}}>
              <Label>Event Number/Name</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 8}} xs={{ size: 7, offset: 5}}>
                <Input name="eventNumber" value={this.state.eventNumber} handleChange={this.handleChange} onChange={this.handleEventNumberChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>

        {/* <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
              <Label>Event Date</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 9, offset: 9}}>
                <Input name="eventDate" value={this.state.eventDate} onChange={this.handleEventDateChange} handleChange={this.handleChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup> */}

        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
              <Label>Bartenders</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 9, offset: 3}}>
                <Input name="bartenders" value={this.state.bartenders} onChange={this.handleBartendersChange} handleChange={this.handleChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
              <Label>Room</Label>
                <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 9, offset: 3}}>
                  <Input name="room" value={this.state.room} onChange={this.handleRoomChange} handleChange={this.handleChange}></Input>
                </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
            <Label>Host Bar (Y/N)</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 6, offset: 6}}>
                <Input name="host" value={this.state.host} onChange={this.handleHostBarChange} handleChange={this.handleChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
            <Label>Sales Tax %</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 6, offset: 6}}>
                <Input name="salesTax" value={this.state.salesTax} onChange={this.handleSalesTaxChange} handleChange={this.handleChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
          <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
            <Label>Service Charge %</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 6, offset: 6}}>
                <Input name="serviceCharge" value={this.state.serviceCharge} onChange={this.handleServiceChargeChange} handleChange={this.handleChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
          <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
            <Label>Cash Collected</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 7, offset: 5}}>
                <Input name="cashCollected" value={this.state.cashCollected}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl={{ size: 6, offset: 3}} lg={{ size: 6, offset: 3}} md="12" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
              <Label>Prices (Including Tax)</Label>
            </Col>
          </Row>
        </FormGroup>
        <br/>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
            <Label>Call Liquor</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 7, offset: 5}}>
                <Input name="callLiquorPrice" value={this.state.callLiquorPrice} handleChange={this.handleChange} onChange={this.handleCallLiquorPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
            <Label>Premium Liquor</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 7, offset: 5}}>
                <Input name="premiumLiquorPrice" value={this.state.premiumLiquorPrice} handleChange={this.handleChange} onChange={this.handlePremiumLiquorPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
            <Label>Top Shelf Liquor</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 7, offset: 5}}>
                <Input name="topLiquorPrice" value={this.state.topLiquorPrice} handleChange={this.handleChange} onChange={this.handleTopLiquorPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
            <Label>Well Liquor</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 7, offset: 5}}>
                <Input name="wellLiquorPrice" value={this.state.wellLiquorPrice} handleChange={this.handleChange} onChange={this.handleWellLiquorPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
            <Label>Chardonnay</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 7, offset: 5}}>
                <Input name="chardonnayPrice" value={this.state.chardonnayPrice} handleChange={this.handleChange} onChange={this.handleChardonnayPriceChange}e></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
            <Label>Merlot</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 7, offset: 5}}>
                <Input name="merlotPrice" value={this.state.merlotPrice} handleChange={this.handleChange} onChange={this.handleMerlotPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
            <Label>Cabernet Sauvignon</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 7, offset: 5}}>
                <Input name="cabernetSauvignonPrice" value={this.state.cabernetSauvignonPrice} handleChange={this.handleChange} onChange={this.handleCabernetSauvignonPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
            <Label>Pinot Grigio</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 7, offset: 5}}>
                <Input name="pinotGrigioPrice" value={this.state.pinotGrigioPrice} handleChange={this.handleChange} onChange={this.handlePinotGrigioPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
              <Label>White Zinfandel</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 7, offset: 5}}>
                <Input name="whiteZinfandelPrice" value={this.state.whiteZinfandelPrice} handleChange={this.handleChange} onChange={this.handleWhiteZinfandelPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
            <Label>Champagne</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 7, offset: 5}}>
                <Input name="champagnePrice" value={this.state.champagnePrice} handleChange={this.handleChange} onChange={this.handleChampagnePriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
              <Label>Domestic Beer</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 7, offset: 5}}>
                <Input name="domesticBeerPrice" value={this.state.domesticBeerPrice} handleChange={this.handleChange} onChange={this.handleDomesticBeerPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 12, offset: 0}}>
              <Label>Imported Beer</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 7, offset: 5}}>
                <Input name="importBeerPrice" value={this.state.importBeerPrice} handleChange={this.handleChange} onChange={this.handleImportBeerPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    );
  }
}
