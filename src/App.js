import React, { useEffect } from "react";
import "antd/dist/antd.css"; // antd style
import "./App.css";
import {
  BackTop,
  Button,
  Layout,
  Menu,
  Row,
  Card,
  Col,
  Input,
  Tooltip,
  Image,
  Carousel,
  Divider,
  Space,
  Tag
} from "antd";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Meta } = Card;
const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {
  useEffect(() => {
    document.title = "Vạn Phát - Niềm tin của mọi nhà";
  }); // Change title

  return (
    <React.Fragment>
      <BackTop style={{ right: 50 }} />
      <Layout>
        <Header id="header" class="clear-fix">
          <Row style={{ flexFlow: "nowrap", height: 64, rowGap: 0 }}>
            <Col xs={24} sm={24} md={6} lg={6} xl={5}>
              <h1>
                <a id="logo" href="/">
                  <img
                    alt="logo"
                    src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.15752-9/168421998_1595172844180770_6359758456902081153_n.png?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_ohc=LzzKwreOc0QAX8kmrSc&_nc_ht=scontent.fsgn2-2.fna&oh=cc78974b100247505231aa49f081f671&oe=60918C58"
                  />
                  Vạn Phát Center
                </a>
              </h1>
            </Col>
            <Col xs={0} sm={0} md={18} lg={18} xl={19} className="menu-row">
              <Search
                placeholder="Từ khóa tìm kiếm"
                enterButton
                style={{
                  borderLeft: "1px solid #f0f0f0",
                  paddingLeft: 24,
                  marginRight: "auto",
                  width: 400
                }}
              />
              <Tooltip
                title="118 Nguyễn Truyền Thanh, Bình Thủy, Cần Thơ, Việt Nam"
                placement="bottomLeft"
              >
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=10.06731%2C105.74779"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "auto" }}
                  className="menu-row"
                >
                  <h5>Cơ sở tại</h5>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    style={{ fontSize: 20, color: "primary" }}
                  />
                </a>
              </Tooltip>
              <h5>Liên hệ chúng tôi</h5>
              <h5 style={{ color: "#EF2B1A" }}>+84 91 406 82 83</h5>
              <h5>hoặc</h5>
              <a
                href="https://www.facebook.com/sangovanphatcenter"
                target="_blank"
                rel="noreferrer"
                style={{ position: "relative", top: 2 }}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ fontSize: 20, color: "primary" }}
                />
              </a>
            </Col>
          </Row>
        </Header>
        <Content style={{ padding: "0 40px", background: "#fff" }}>
          <Divider orientation="right">
            <span style={{ marginRight: 30 }}>Top danh mục tìm kiếm</span>
            <Tag color="magenta">Sàn gỗ công nghiệp</Tag>
            <Tag color="volcano">Sàn gỗ tự nhiên</Tag>
            <Tag color="green">Sàn nhựa</Tag>
            <Tag color="blue">Phụ kiện</Tag>
          </Divider>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={245} style={{ background: "#fff" }}>
              <h1>Danh mục sản phẩm</h1>
              <Menu mode="vertical">
                <SubMenu key="sub1" title={<h1>Sàn gỗ công nghiệp</h1>}>
                  <Menu.Item key="1">
                    <b>Sàn Kosmos</b> - <i>Việt Nam</i>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <b>Sàn Lamton</b> - <i>Trung Quốc</i>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <b>Sàn Artfloor</b> - <i>Thổ Nhĩ Kỳ</i>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <b>Sàn Thaixin</b> - <i>Thái Lan</i>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <b>Sàn Floorpan</b> - <i>Nga</i>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <b>Siêu chịu nước sàn gỗ Hillman</b> - <i>Malaysia</i>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<h1>Sàn gỗ tự nhiên</h1>} />
                <SubMenu key="sub3" title={<h1>Sàn nhựa</h1>}>
                  <Menu.Item key="9">Sàn Amaz</Menu.Item>
                  <Menu.Item key="10">Sàn Aimaru</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<h1>Phụ kiện</h1>} />
              </Menu>
            </Sider>
            <Content style={{ padding: "0 0 0 24px", minHeight: 280 }}>
              <Row gutter={[5, 5]}>
                <Col span={17}>
                  <Carousel autoplay>
                    <Image
                      preview={false}
                      src="https://www.floordi.com/images/banners/san-go-van-da.jpg"
                      width={748}
                    />
                    <Image
                      preview={false}
                      src="https://www.floordi.com/images/banners/san-go-chuyen-dung-vung-bien.jpg"
                      width={748}
                    />
                    <Image
                      preview={false}
                      src="https://www.floordi.com/images/banners/san-go-xuong-ca.jpg"
                      width={748}
                    />
                  </Carousel>
                </Col>
                <Col span={7}>
                  <Col span={24}>
                    <Image
                      preview={false}
                      src="https://www.floordi.com/images/banners/banner-floordi-tuyen-dai-ly.jpg"
                      width={242}
                    />
                  </Col>
                  <Col span={24}>
                    <Image
                      preview={false}
                      src="https://www.floordi.com/images/sale/nam-moi-sam-san-nhan-qua.jpg"
                      width={242}
                    />
                  </Col>
                  <Col span={24}>
                    <Image
                      preview={false}
                      src="https://www.floordi.com/images/banners/khuyen-mai-nuoc-lau-san-go-bingo.jpg"
                      width={242}
                    />
                  </Col>
                </Col>
              </Row>
            </Content>
          </Layout>
          <Divider orientation="left">
            <h3>Các mẫu sàn gỗ</h3>
          </Divider>
          <Row justify="center" style={{ marginBottom: 30 }}>
            <Col span={24} align="center">
              <Space size="middle">
                <Card
                  hoverable
                  cover={
                    <Image
                      width={200}
                      height={200}
                      src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/102907516_123081179411773_2845119394957230080_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=NTGXvBDgbn4AX94W06i&_nc_ht=scontent.fsgn2-5.fna&oh=a157a05376794b5891ed62fe295c2f72&oe=6092ADD1"
                    />
                  }
                >
                  <Meta
                    title="Thaixin"
                    description={<i>Sàn gỗ Thaixin - Thái Lan</i>}
                  />
                </Card>
                <Card
                  hoverable
                  cover={
                    <Image
                      width={200}
                      height={200}
                      src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/101210708_121750829544808_6541079151351169024_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=Ak0pENuXvOcAX8whG2Y&_nc_ht=scontent.fsgn2-4.fna&oh=fb6f0306b8635f64aaf08f66bae9a69d&oe=6092511A"
                    />
                  }
                >
                  <Meta
                    title="Robina"
                    description={<i>Sàn gỗ Robina 8mm bản nhỏ</i>}
                  />
                </Card>
                <Card
                  hoverable
                  cover={
                    <Image
                      width={200}
                      height={200}
                      src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/100628987_118389759880915_6683126437228052480_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=OC8d4DFLzCcAX8Qzv5w&_nc_ht=scontent.fsgn2-5.fna&oh=d3b6fd2bb7e51827fbace93e1288cf25&oe=60930F49"
                    />
                  }
                >
                  <Meta
                    title="Galamax Gold"
                    description={<i>Sàn gỗ Galamax Gold 8mm</i>}
                  />
                </Card>
                <Card
                  hoverable
                  cover={
                    <Image
                      width={200}
                      height={200}
                      src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/99131832_115804873472737_1290738595589521408_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=Hr7VtVOQ0P8AX92bLYg&_nc_ht=scontent.fsgn2-2.fna&oh=eea1c375c52119ac92b095e6569355f0&oe=6090885E"
                    />
                  }
                >
                  <Meta
                    title="Wilson"
                    description={<i>Sàn gỗ Wilson 8mm bản nhỏ</i>}
                  />
                </Card>
                <Card
                  hoverable
                  cover={
                    <Image
                      width={200}
                      height={200}
                      src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/100778079_121750916211466_3319806284387057664_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=RAZ3mBCzBacAX_qeJ2U&_nc_ht=scontent.fsgn2-1.fna&oh=32b5391e3669e44004a6c65f298a09b7&oe=60940B5F"
                    />
                  }
                >
                  <Meta title="Povar" description={<i>Green HDF - HQ5508</i>} />
                </Card>
              </Space>
            </Col>
            <Col style={{ marginTop: 20 }}>
              <Button type="primary">Xem thêm</Button>
            </Col>
          </Row>
          <Divider orientation="center">
            <h3>Sản phẩm thực tế của Vạn Phát</h3>
          </Divider>
          <Row justify="center" style={{ marginBottom: 30 }}>
            <Col span={24} align="center">
              <Space size="middle">
                <Card
                  hoverable
                  cover={
                    <div class="thumbnail">
                      <img
                        alt="example"
                        src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/167010088_222946396268698_8178927615616797792_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=ldNELtRlh-QAX93uZHf&_nc_ht=scontent.fsgn2-6.fna&oh=0abf6b5fa38ec88a0597a733115b61ad&oe=6090BF22"
                      />
                    </div>
                  }
                >
                  <Meta title="fjslkf" description="www.instagram.com" />
                </Card>
                <Card
                  hoverable
                  cover={
                    <div class="thumbnail">
                      <img
                        alt="example"
                        src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.15752-9/167613205_250344570159167_3267726831907636701_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=B-s4a04jj8YAX8yCn2q&_nc_ht=scontent.fsgn2-1.fna&oh=9db76874a93190ec383fe644c8a05167&oe=6091E543"
                      />
                    </div>
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
                <Card
                  hoverable
                  cover={
                    <div class="thumbnail">
                      <img
                        alt="example"
                        src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/133894555_214809300238960_2597333018204539686_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=Z3vhMLemoF4AX-Mnq8e&_nc_ht=scontent.fsgn2-4.fna&oh=21d44ddb08d2f0d53942c5d9f2500104&oe=60909577"
                      />
                    </div>
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
                <Card
                  hoverable
                  cover={
                    <div class="thumbnail">
                      <img
                        alt="example"
                        src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/120195207_168067841579773_6458155378201527068_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=En9lwwo1ErQAX-FqQES&_nc_ht=scontent.fsgn2-2.fna&oh=e35533fb8b960b17d911964419f634cb&oe=6091550F"
                      />
                    </div>
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
                <Card
                  hoverable
                  cover={
                    <div class="thumbnail">
                      <img
                        alt="example"
                        src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/120299437_168066624913228_5339221792365507750_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=jTOv-jkGx34AX-lJqBA&_nc_ht=scontent.fsgn2-6.fna&oh=d3b8c749ba82b9c86077285e701db968&oe=6093B632"
                      />
                    </div>
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Space>
            </Col>
            <Col style={{ marginTop: 20 }}>
              <Button type="primary">Xem thêm</Button>
            </Col>
          </Row>
          <Divider orientation="right">
            <h3>Các hình ảnh công trình</h3>
          </Divider>
          <Row justify="center" style={{ marginBottom: 30 }}>
            <Col span={24} align="center">
              <Space>
                <Image
                  width={200}
                  src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/120231230_169631618090062_3281912262942421032_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=Rw08K3OwCCoAX-ACQMC&_nc_ht=scontent.fsgn2-2.fna&oh=4e729e4fbfd3c75ee9fe3138f5b5415c&oe=60929FCA"
                />
                <Image
                  width={200}
                  src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/123055225_177854113934479_1924994014501679243_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=hx_Wd8tsN14AX-CSFs8&_nc_ht=scontent.fsgn2-1.fna&oh=7d40a31bf72cff7e7cb6172e4e16d6d8&oe=6092BABF"
                />
                <Image
                  width={200}
                  src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/120298351_168066988246525_5075222419399409940_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=R4mkX4pfKQMAX8avNIl&_nc_ht=scontent.fsgn2-5.fna&oh=ad6034ec911e5f5d333b765ac76e3c3d&oe=6091F08F"
                />
                <Image
                  width={200}
                  src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/119576555_164302888622935_5042341949128932255_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=okyborOiw5AAX8pIGc6&_nc_ht=scontent.fsgn2-5.fna&oh=1bac1ddbf09f7bb56fcfe045abe772ce&oe=60913A30"
                />
                <Image
                  width={200}
                  src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/118463973_160115699041654_8850975095223592195_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=9PIv3bkZWzwAX9Eb5p6&_nc_ht=scontent.fsgn2-1.fna&oh=295e235eeeb34dee8e9b9e1d580f5664&oe=60914F4E"
                />
              </Space>
            </Col>
            <Col style={{ marginTop: 20 }}>
              <Button type="primary">Xem thêm</Button>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: 50 }}>
            Uy Tín Chất Lượng Là Nền Tảng Phát Triển Của Vạn Phát
          </h2>
          <Row>
            <Col span={8} style={{ textAlign: "right" }}>
              <h3 style={{ marginBottom: 30 }}>
                Nội ngoại thất Vạn Phát Center
              </h3>
              <h4>Uy Tín Chất Lượng Là Nền Tảng Phát Triển Của Vạn Phát</h4>
              <h4 style={{ marginTop: 10 }}>
                Giờ hoạt động: <span style={{ color: "#73D13D" }}>6AM</span> -
                <span style={{ color: "#F5222D" }}>10PM</span>
              </h4>
            </Col>
            <Col span={16} style={{ textAlign: "right", paddingRight: 200 }}>
              <h3 style={{ marginBottom: 30 }}>Các thông tin</h3>
              <h4>
                Email:{" "}
                <a
                  href="mailto:ctyvanphatcenter.nnt@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  tabindex="0"
                >
                  ctyvanphatcenter.nnt@gmail.com
                </a>
              </h4>
              <h4 style={{ marginTop: 10 }}>
                Số điện thoại liên hệ: +84 91 406 82 83
              </h4>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </React.Fragment>
  );
}

export default App;
