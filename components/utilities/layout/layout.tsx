import {Col, Row} from "antd";
import {useRouter} from "next/router";
import SideMenu from "../side-menu/side-menu";

interface Props {
    children: any;
}

export default function Layout({children}: Props) {
    const router = useRouter();

    return (
        <Row>
            <Col xs={0} sm={0} md={6}>
                <SideMenu/>
            </Col>
            <Col xs={24} sm={24} md={18}>
                <main className="w-full">{children}</main>
            </Col>
        </Row>
    );
}
