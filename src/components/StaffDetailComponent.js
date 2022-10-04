import React, {Component} from 'react';
import {Card,CardBody, CardImg, CardTitle,CardText} from 'reactstrap';
import dateFormat from 'dateformat'

class StaffDetail extends Component{
    render(){
        const staff1=this.props.staff
        return(
            <Card className='mb-5 bg-info text-white'>
                <div className='container row' key={staff1.id}>
                    <div className='left'>
                        <CardImg src={staff1.image}/>
                    </div>
                    <div className='right'>
                        <CardBody>
                            <CardTitle>Họ và tên: {staff1.name}</CardTitle>
                            <CardText>Ngày sinh: {dateFormat(staff1.doB,'dd/mm/yyyy')}</CardText>
                            <CardText>Phòng ban:{staff1.department.name}</CardText>
                            <CardText>Bậc lương: {staff1.salaryScale}</CardText>
                            <CardText>Số ngày nghỉ còn lại: {staff1.annualLeave}</CardText>
                            <CardText>Số ngày đã làm thêm:{staff1.overTime}</CardText>
                        </CardBody>
                    </div>

                </div>
            </Card>
        );

    }
}
export default StaffDetail;