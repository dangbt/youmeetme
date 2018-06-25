import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Slide from '../SlideAdvertisement/Slide.jsx';
import checkAuthenticate from '../Function/checkAuthenticate';
import Footer from '../Footer/footer';
import { Link, Redirect } from 'react-router-dom';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Header, BtnToggle, IconExpand, BtnWrapper, IconClose, Content } from './styled';

export default class Support extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticate: true,
            user: {},
            collapse1: false,
            collapse2: false,
            collapse3: false,
            collapse4: false,
            collapse5: false,
            collapse6: false
        }
    }
    toggle1 = () => {
        this.setState({ collapse1: !this.state.collapse1 });
    }
    toggle2 = () => {
        this.setState({ collapse2: !this.state.collapse2 });
    }
    toggle3 = () => {
        this.setState({ collapse3: !this.state.collapse3 });
    }
    toggle4 = () => {
        this.setState({ collapse4: !this.state.collapse4 });
    }
    toggle5 = () => {
        this.setState({ collapse5: !this.state.collapse5 });
    }
    toggle6 = () => {
        this.setState({ collapse6: !this.state.collapse6 });
    }

    checkAuth = () => {
        checkAuthenticate().then((response) => {
            this.setState({
                authenticate: response.authentication,
                user: response.data
            })
        })

    }



    componentDidMount() {
        this.checkAuth();
    }

    render() {
        const { authenticate, user } = this.state;

        // if (!authenticate) {
        //     return <Redirect to='/login'></Redirect>
        // }
        return (
            <div>
                <Sidebar user={user} >
                    <Slide />
                    <Content>
                        <Header textAlign='none' color='black' animation >Trợ giúp</Header>
                        <BtnWrapper>
                            <BtnToggle color="primary" onClick={this.toggle1} >Đăng ký và quản lý tài khoảng trên YOU MEET ME</BtnToggle>
                            {this.state.collapse1 ? <IconClose /> : <IconExpand />}
                        </BtnWrapper>
                        <Collapse isOpen={this.state.collapse1}>
                            <Card>
                                <CardBody>
                                    <Header color='blue' h4 textAlign='none' >1. Làm thế nào để tôi có thể đăng ký tài khoản trên Ymeet.me?</Header>
                                    <p> Để đăng ký tài khoản, bạn làm theo các bước sau:</p>
                                    <p>1. Đi đến <Link to='ymeetme.herokuapp.com' >ymeetme.herokuapp.com</Link></p> 
                                    <p>2. Ấn chọn "Sign Up"</p>
                                    <p>3. Nhập các thông tin tài khoản của bạn.</p>
                                    <p>4. Chờ hệ thống xác nhận tài khoản và hoàn thành các thông tin hướng dẫn.</p>
                                </CardBody>
                            </Card>
                        </Collapse>
                        <BtnWrapper>
                            <BtnToggle color="primary" onClick={this.toggle2} >Thiết lập tài khoảng trên YOU MEET ME</BtnToggle>
                            {this.state.collapse2 ? <IconClose /> : <IconExpand />}
                        </BtnWrapper>
                        <Collapse isOpen={this.state.collapse2}>
                            <Card>
                                <CardBody>
                                    <Header color='blue' h4 textAlign='none' >1. Làm thế nào để tôi cập nhật và chỉnh sửa các thông tin cá nhân?</Header>
                                    <p>Bạn làm theo hướng dẫn sau:</p>
                                    <p>1. Đăng nhập YOU MEET ME</p> 
                                    <p>2. Click vào ảnh đại diện của mình ở góc trên cùng bên phải hoặc chọn <Link to='/profile' >Profile</Link> dưới Footer</p>
                                    <p>3. Nhấn vào form chỉnh sửa và Nhập các thông tin tài khoản của bạn.</p>
                                    <p>4. Chờ hệ thống xác nhận tài khoản và hoàn thành các thông tin hướng dẫn.</p>

                                    <Header color='blue' h4 textAlign='none' >2. Tôi có cần phải cập nhật tất cả các thông tin cá nhân không?</Header>
                                    <p>Cập nhật tất cả các thông tin cá nhân trên YOU MEET ME là không bắt buộc.</p>
                                    <p>Tuy nhiên, một Hồ sơ cá nhân hoàn chỉnh và đầy đủ thông tin sẽ khiến đối phương tin tưởng và dành nhiều sự quan tâm cho bạn hơn.</p> 

                                     <Header color='blue' h4 textAlign='none' >3. Tại sao tuổi của tôi không được hiển thị đúng?</Header>
                                    <p>YOU MEET ME hiện tại tính tuổi dựa theo chính xác ngày sinh của bạn, vì vậy, sẽ có hiển thị sai nếu bạn nhập không đúng ngày sinh của bạn.</p>
                                    <p>Bạn vui lòng kiểm tra lại ngày tháng năm sinh của mình ở <Link to='/profile'>Profile.</Link></p> 

                                    <Header color='blue' h4 textAlign='none' >4. Tôi có thể tải lên tối đa bao nhiêu ảnh?</Header>
                                    <p>Bạn được tải không giới hạn số ảnh.</p>

                                    <Header color='blue' h4 textAlign='none' >5. Tại sao ảnh của tôi lại bị xóa?</Header>
                                    <p>Ảnh của bạn sẽ bị hệ thống xóa nếu vi phạm một trong các điều sau:</p>
                                    <p>- Ảnh không phải người: ảnh động vật, phong cảnh thiên nhiên, đồ vật…</p>
                                    <p>- Ảnh nhân vật: truyện tranh, tranh vẽ, game, hoạt hình…</p>
                                    <p>- Ảnh người nổi tiếng: diễn viên, ca sĩ, người mẫu…</p>
                                    <p>- Ảnh người khác: trẻ em, người khác giới, người lớn tuổi…</p>
                                    <p>- Ảnh không hợp với thuần phong mỹ tục: ảnh sẽ, ảnh nhạy cảm…</p>

                                    <Header color='blue' h4 textAlign='none' >6. Tại sao tôi không thể tải ảnh lên?</Header>
                                    <p>Bạn chỉ có thể tải ảnh có dung lượng tối đa là 50 Kb với định dạng là: .png, .jpg, .gif</p>
                                    </CardBody>
                            </Card>
                        </Collapse>
                        <BtnWrapper>
                            <BtnToggle color="primary" onClick={this.toggle3} >Thích, tìm kiếm và Ghép đôi</BtnToggle>
                            {this.state.collapse3 ? <IconClose /> : <IconExpand />}
                        </BtnWrapper>
                        <Collapse isOpen={this.state.collapse3}>
                            <Card>
                                <CardBody>
                                    <Header color='blue' h4 textAlign='none' >1. Thích là gì?</Header>
                                    <p>Gửi Thích là cách để bạn thể hiện sự quan tâm của mình với đối phương trên YmeetMe.</p>
                                    <p>Khi được người đó cũng gửi Thích lại, hai bạn sẽ Ghép đôi thành công và có thể Trò chuyện với nhau.</p>
                                    
                                    <Header color='blue' h4 textAlign='none' >2. Tôi có thể bỏ Thích không?</Header>
                                    <p>Hiện nay bạn chưa thể bỏ Thích bất cứ ai.</p>
                                    
                                    <Header color='blue' h4 textAlign='none' >3. Làm thế nào để tìm kiếm những đối tượng theo tiêu chí riêng?</Header>
                                    <p>Hiện nay bạn chưa thể thực hiện được chức năng này.</p>

                                    <Header color='blue' h4 textAlign='none' >4. Tôi có thể bỏ Ghép đôi với ai đó không?</Header>
                                    <p>Hiện nay bạn chưa thể thực hiện được chức năng này.</p>
                                    
                                </CardBody>
                            </Card>
                        </Collapse>
                        <BtnWrapper>
                            <BtnToggle color="primary" onClick={this.toggle4} >Tương tác với các người khác</BtnToggle>
                            {this.state.collapse4 ? <IconClose /> : <IconExpand />}
                        </BtnWrapper>
                        <Collapse isOpen={this.state.collapse4}>
                            <Card>
                                <CardBody>
                                    <Header color='blue' h4 textAlign='none' >1. Làm sao để chặn một người?</Header>
                                    <p>Hiện nay bạn chưa thể thực hiện được chức năng này.</p>

                                    <Header color='blue' h4 textAlign='none' >2. Làm sao để báo cáo một người dùng có hại?</Header>
                                    <p>Hiện nay bạn chưa thể thực hiện được chức năng này.</p>
                                    
                                    <Header color='blue' h4 textAlign='none' >3. Tôi có thể bỏ chặn ai đó sau khi đã chặn họ?</Header>
                                    <p>Hiện nay bạn chưa thể thực hiện được chức năng này.</p>
                                </CardBody>
                            </Card>
                        </Collapse>
                        <BtnWrapper>
                            <BtnToggle color="primary" onClick={this.toggle5} >Trò chuyện</BtnToggle>
                            {this.state.collapse5 ? <IconClose /> : <IconExpand />}
                        </BtnWrapper>
                        <Collapse isOpen={this.state.collapse5}>
                            <Card>
                                <CardBody>
                                    <Header color='blue' h4 textAlign='none' >1. Làm sao để tôi nhắn tin cho một người?</Header>
                                    <p>Để nhắn tin với người khác trên YOU MEET ME bạn làm như sau</p>      
                                    <p>Ghép đôi: Bạn cần gửi Thích tới đối phương và được họ Thích lại. Lúc này, 2 bạn đã Ghép đôi thành công. Bạn có thể vào mục Trò chuyện sẽ thấy đối phương ở mục <Link to='/chat' >Chat</Link></p>     

                                    <Header color='blue' h4 textAlign='none' >2. Tôi có thể xóa cuộc trò chuyện không?</Header>
                                    <p>Hiện nay bạn chưa thể thực hiện được chức năng này.</p>      
                                </CardBody>
                            </Card>
                        </Collapse>
                        <BtnWrapper>
                            <BtnToggle color="primary" onClick={this.toggle6} >Hèn hò trực tuyến an toàn, hiệu quả</BtnToggle>
                            {this.state.collapse6 ? <IconClose /> : <IconExpand />}
                        </BtnWrapper>
                        <Collapse isOpen={this.state.collapse6}>
                            <Card>
                                <CardBody>
                                    <Header color='blue' h4 textAlign='none' >1. Tôi nên đăng ảnh đại diện như thế nào để thu hút hơn?</Header>
                                    <p>Trước hết, bạn cần đảm bảo ảnh của bạn không thuộc các trường hợp ảnh bị xóa được quy định bởi YOU MEET ME.</p>
                                    <p>Sau đó, hãy tham khảo một vài bí kíp sau đây:</p>ư
                                    <p>- Ảnh sáng rõ, không bị bóng đen che mặt, không chụp ngược sáng</p>
                                    <p>- Cười lên nào</p>
                                    <p>- Thoải mái và tạo cảm giác tích cực</p>
                                    <p>- Nên là ảnh được chụp trong những khoảnh khắc vui vẻ, hạnh phúc</p>
                                    <p>- Nên chụp ảnh toàn thân bạn</p>
                                    <p>- Không nên đeo kính đen</p>
                                    <p>- Không nên nghiêm nghị, tức giận hay buồn bã</p>
                                    <p>- Không nên là bức ảnh chụp với người yêu cũ</p>

                                     <Header color='blue' h4 textAlign='none' >2. Tôi nên đăng tải những bức ảnh phụ như thế nào để hấp dẫn hơn?</Header>
                                    <p>Trước hết, bạn cần đảm bảo ảnh của bạn không thuộc các trường hợp ảnh bị xóa được quy định bởi YOU MEET ME.</p>
                                    <p>Sau đó, hãy tham khảo một vài bí kíp sau đây:</p>ư
                                    <p>- Có người trong ảnh là chính bạn</p>
                                    <p>- Ảnh rõ nét, không chỉnh sửa thái quá</p>
                                    <p>- Ảnh khi bạn đang tham gia các hoạt động vui chơi, công việc hàng ngày để đối phương hiểu rõ hơn về cuộc sống của bạn</p>
                                    <p>- Nên là ảnh được chụp trong những khoảnh khắc vui vẻ, hạnh phúc</p>

                                     <Header color='blue' h4 textAlign='none' >3. Làm thế nào để giới thiệu bản thân cuốn hút hơn?</Header>
                                    <p>- Viết chân thành, thật lòng: Chia sẻ thông tin công việc hoặc quan điểm cá nhân về cuộc sống, tình yêu.</p>
                                    <p>- Nói về sở thích: Chia sẻ sở thích là cách đơn giản nhất thể hiện cá tính của bạn.</p>ư
                                    <p>- Có người trong ảnh là chính bạn- Tỏ ra hài hước: Trích dẫn 1 câu nói hài hước, 1 truyện cười siêu ngắn,...</p>
                                    <p>- Thể hiện sự khác biệt: Thể hiện cá tính của bạn theo cách sáng tạo nhất.</p>

                                </CardBody>
                            </Card>
                        </Collapse>
                    </Content>
                </Sidebar>
                <Footer />
            </div>

        )
    }
}

