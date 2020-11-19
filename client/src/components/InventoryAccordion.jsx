import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InventoryAccordion.scss'
import AddSkidModal from './addSkidModal';

import {
  Nav,
  Button,
  Accordion,
  Card
} from 'react-bootstrap';

// TODO: will need to make an API call to this ---> DB <---
import getAllOpenSkids from '../mock-db/mock-db'


import nameReducer from '../helpers/name-reducer'









function InventoryAccordion() {


  const allSkids = getAllOpenSkids

  return (
    <>
      <section className="header--btns">
        <Button variant="info">Active Skids</Button>
        <Button variant="primary"><i className="fas fa-sync-alt"></i></Button>
      </section>
      <section className="accordion--wrapper">
        <Accordion>
          {allSkids.map((skid, index) => {
            return (
              <React.Fragment key={skid.id}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                    <p id="skid--list">{`${skid.name} - ${skid.supplier} - ${skid.country_of_origin} - ${skid.some_number}# - Rank Lot#${skid.rank_lot_number} - Arrives ${skid.arrival_date} - RankQC Report #${skid.rank_qc_report}`}</p>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body>
                      <Nav className="justify-content-end">
                        <Nav.Item>
                          <Nav.Link href="#">Add box</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="#">Edit skid details</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      {skid.boxes.map((box) => {
                        return (
                          <article key={box.id} className={`card--wrapper ${!box.user_id ? "inactive--box" : null}`}>
                            <i className="fas fa-edit"></i>
                            {box.user_id ? <span className="card-user">
                              <i className="fas fa-circle"></i>
                              <p>{nameReducer(box.user_id)}</p>
                            </span> : null}

                            <table id="table1">
                              <tbody>
                                <tr>
                                  <td className="col--label">Box</td>
                                  <td className="col--value">{box.box_number}</td>
                                </tr>
                                <tr>
                                  <td className="col--label">Species</td>
                                  <td className="col--value">{box.species}</td>
                                </tr>
                                <tr>
                                  <td className="col--label">Size</td>
                                  <td className="col--value">{box.size}</td>
                                </tr>
                                <tr>
                                  <td className="col--label">Weight</td>
                                  <td className="col--value">{`${box.weight}lbs`}</td>
                                </tr>
                              </tbody>
                            </table>
                            <table id="table2">
                              <tbody>
                                <tr>
                                  <td className="col--label">Sold To</td>
                                  <td className="col--value">{box.customer ? box.customer : "---"}</td>
                                </tr>
                                <tr>
                                  <td className="col--label">Price</td>
                                  <td className="col--value">{box.price ? `$${box.price / 100}` : "---"}</td>
                                </tr>
                                <tr>
                                  <td className="col--label">Ship-Date</td>
                                  <td className="col--value">{box.ship_date ? box.ship_date : "---"}</td>
                                </tr>
                                <tr>
                                  <td className="col--label">Carrier/Case/Lot</td>
                                  <td className="col--value"><span>{box.carrier ? `${box.carrier}-` : "-"}</span><span>{box.case ? `${box.case}-` : "-"}</span><span>{box.lot ? box.lot : "-"}</span></td>
                                </tr>
                              </tbody>
                            </table>
                          </article>
                        )
                      })}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </React.Fragment>
            )
          })}
        </Accordion>
      </section>
      <section id="footer--btns">
        <AddSkidModal />
      </section>

    </>
  )
}
export default InventoryAccordion
