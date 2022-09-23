import {Drawer} from "antd";

interface Props {
    title: string;
    placement: "top" | "bottom" | "left" | "right";
    onCloseHandler: any;
    open: boolean;
    children: any;
    width: number | string;
}

export default function GenericDrawer({
                                          title,
                                          placement,
                                          onCloseHandler,
                                          open,
                                          children,
                                          width,
                                      }: Props) {
    return (
        <Drawer
            width={width}
            title={title}
            placement={placement}
            onClose={onCloseHandler}
            open={open}
        >
            {children}
        </Drawer>
    );
}
