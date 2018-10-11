import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {handleEventNumberChange, handleEventNameChange,  handleBartendersChange,
        handleRoomChange, handleHostBarChange, handleSalesTaxChange, handleServiceChargeChange,
        handleCallLiquorPriceChange, handlePremiumLiquorPriceChange, handleTopLiquorPriceChange,
        handleWellLiquorPriceChange, handleChardonnayPriceChange, handleMerlotPriceChange,
        handleCabernetSauvignonPriceChange, handleWhiteZinfandelPriceChange, handlePinotGrigioPriceChange,
        handleChampagnePriceChange, handleDomesticBeerPriceChange, handleImportBeerPriceChange} from '../inputPageFunctions.js';



export default class PointSheetInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      eventNumber: '',
      eventName: '',
      bartenders: '',
      room: '',
      host: 'n',
      salesTax: '5',
      serviceCharge: '21',
      callLiquorPrice: '6',
      premiumLiquorPrice: '7',
      topLiquorPrice: '9',
      wellLiquorPrice: '5',
      chardonnayPrice: '5',
      merlotPrice: '5',
      cabernetSauvignonPrice: '5',
      pinotGrigioPrice: '5',
      whiteZinfandel: '5',
      champagnePrice: '5',
      domesticBeerPrice: '4',
      importBeerPrice: '5'
    };
    this.handleEventNumberChange = handleEventNumberChange.bind(this);
    this.handleEventNameChange = handleEventNameChange.bind(this);
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

  render(){
    return(
      <Form>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
              <Label>Event Number</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 9, offset: 9}}>
                <Input value={this.state.eventNumber} onChange={this.handleEventNumberChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
              <Label>Event Name</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 9, offset: 9}}>
                <Input value={this.state.eventName} onChange={this.handleEventNameChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
              <Label>Bartenders</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 9, offset: 9}}>
                <Input value={this.state.bartenders} onChange={this.handleBartendersChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
              <Label>Room</Label>
                <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 9, offset: 9}}>
                  <Input value={this.state.room} onChange={this.handleRoomChange}></Input>
                </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
            <Label>Host Bar (Y/N)</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 9, offset: 9}}>
                <Input value={this.state.host} onChange={this.handleHostBarChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
            <Label>Sales Tax %</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 5, offset: 9}}>
                <Input value={this.state.salesTax} onChange={this.handleSalesTaxChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
          <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
            <Label>Service Charge %</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 5, offset: 9}}>
                <Input value={this.state.serviceCharge} onChange={this.handleServiceChargeChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl={{ size: 6, offset: 3}} lg={{ size: 6, offset: 3}} md="12" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 3}}>
              <Label>Prices (Including Tax)</Label>
            </Col>
          </Row>
        </FormGroup>
        <br/>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
            <Label>Call Liquor</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 5, offset: 9}}>
                <Input value={this.state.callLiquorPrice} onChange={this.handleCallLiquorPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
            <Label>Premium Liquor</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 5, offset: 9}}>
                <Input value={this.state.premiumLiquorPrice} onChange={this.handlePremiumLiquorPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
            <Label>Top Shelf Liquor</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 5, offset: 9}}>
                <Input value={this.state.topLiquorPrice} onChange={this.handleTopShelfPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
            <Label>Well Liquor</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 5, offset: 9}}>
                <Input value={this.state.wellLiquorPrice} onChange={this.handleWellLiquorPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
            <Label>Chardonnay</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 5, offset: 9}}>
                <Input value={this.state.chardonnayPrice} onChange={this.handleChardonnayPriceChange}e></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
            <Label>Merlot</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 5, offset: 9}}>
                <Input value={this.state.merlotPrice} onChange={this.handleMerlotPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
            <Label>Cabernet Sauvignon</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 5, offset: 9}}>
                <Input value={this.state.cabernetSauvignonPrice} onChange={this.handleCabernetSauvignonPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
            <Label>Pinot Grigio</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 5, offset: 9}}>
                <Input value={this.state.pinotGrigioPrice} onChange={this.handlePinotGrigioPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
              <Label>White Zinfandel</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 5, offset: 9}}>
                <Input value={this.state.whiteZinfandel} onChange={this.handleWhiteZinfandelPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
            <Label>Champagne</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 5, offset: 9}}>
                <Input value={this.state.champagnePrice} onChange={this.handleChampagnePriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
              <Label>Domestic Beer</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 5, offset: 9}}>
                <Input value={this.state.domesticBeerPrice} onChange={this.handleDomesticBeerPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
              <Label>Imported Beer</Label>
              <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 5, offset: 9}}>
                <Input value={this.state.importBeerPrice} onChange={this.handleImportBeerPriceChange}></Input>
              </Col>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    );
  }
}
