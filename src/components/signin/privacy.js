import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import styled from 'styled-components'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { SiTwitter } from 'react-icons/si'

const Text = styled.p`
  color: white;
  font-weight: 700;
`

const Link = styled.a``

export default class privacy extends Component {
  render() {
    const style = {
      color: 'white',
      fontSize: '24px',
    }
    return (
      <Col className="pt-3">
        <Text>
          All transactions done here are by no means real transactions, it's a
          product of the thought of the creator.
        </Text>
        <Text className="mt-2">
          This is a simulation of how transactions work in real fintech apps, no
          external or third party provider was included in the building process
        </Text>
        <Text className="mt-2">
          Proceeding to login means you have accepted the terms stated above.
        </Text>
        <Col lg={8} className="m-auto pt-3 pb-3">
          <Row>
            <Col>
              <Link href={'https://github.com/Akinolae'} target={'_blank'}>
                <FaGithubAlt style={style} />
              </Link>
            </Col>
            <Col>
              <GrInstagram style={style} />
            </Col>
            <Col>
              <Link href="https://twitter.com/akin_mankind" target={'_blank'}>
                <SiTwitter style={style} />
              </Link>
            </Col>
            <Col>
              <Link href="https://www.linkedin.com/in/makinde-akinola-4073bb177/overlay/contact-info/">
                <FaLinkedin style={style} />
              </Link>
            </Col>
          </Row>
        </Col>
      </Col>
    )
  }
}
