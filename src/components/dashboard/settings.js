import React from 'react'
import styled from 'styled-components'
import { Button } from '../../globalcomponents'
import { connect } from 'react-redux'
import { Row } from 'reactstrap'

export const Type = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
`

const Wrapper = styled.div`
  height: 27rem;
  width: 100%;
  margin-top: 5%;
`
const CaptionWrapper = styled.div`
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(34, 193, 195);
  background: radial-gradient(
    circle,
    rgba(34, 193, 195, 0.6474964985994398) 0%,
    rgba(161, 133, 74, 0.5998774509803921) 99%
  );
  padding: 3%;
`

const Avatar = styled.div`
  height: 200px;
  width: 200px;
  background: blue;
  border: 2px solid white;
`

const Settings = () => {
  return (
    <div>
      <Wrapper>
        <CaptionWrapper>
          <div
            style={{ width: '100%' }}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <Avatar className="rounded-circle" />
            </div>
            <div className="d-flex">
              <Button text="Edit Profile" height="50px" />
            </div>
          </div>
        </CaptionWrapper>
      </Wrapper>
      <Row></Row>
    </div>
  )
}

const mapStateToProps = (state) => ({
  payLoad: state.user.payLoad,
})
export default connect(mapStateToProps, {})(Settings)
