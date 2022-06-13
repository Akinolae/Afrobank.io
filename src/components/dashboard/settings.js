import React from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'

export const Type = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
`
const AccountCard = styled.div`
  height: 150px;
  width: 100%;
  border-radius: 10px;

  background: #0d3153;
  transition: all ease 0.3s;
`

const DashbodyCard = styled.div`
  width: 100%;
  background: #000000;
  border-radius: 10px;
  height: 100%;
  max-height: 530px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`
const Settings = () => {
  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="d-flex pt-4 align-items-center">
            <Type size="25" className="font-weight-bold" color="white">
              Settings
            </Type>
          </div>
        </Col>
      </Row>
      <DashbodyCard>
        <Row>
          <Col xl={4}>
            <AccountCard>
              <p>hello</p>
            </AccountCard>
          </Col>
          <Col xl={4}>
            <AccountCard />
          </Col>
          <Col xl={4}>
            <AccountCard />
          </Col>
        </Row>
      </DashbodyCard>
    </>
  )
}
export default Settings
