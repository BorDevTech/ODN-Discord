import { Avatar, Button, Container, Drawer, HStack, Menu, Portal, Text, Image, CloseButton, Link, VStack } from "@chakra-ui/react";

export default function Navbar() {
    return (<>
        <Container maxW={"container.xl"} py={4}>
            <HStack justifyContent={"space-between"}>
                <Image src={"/ODNLogo.png"} alt="ODN Logo" boxSize={"40px"} rounded={"full"} />

                <HStack>
                    <Drawer.Root size={'full'}>
                        <Drawer.Trigger focusRing="outside" asChild>
                            <Button justifyContent={"space-between"}>
                                <Avatar.Root size="sm">
                                    <Avatar.Fallback name="Login" />
                                    <Avatar.Image src="https://avatars.githubusercontent.com/u/112635732?s=400&u=9c8e5b1a7c0d2e4f1a3b9c8e5b1a7c0d2e4f1a&v=4" />
                                </Avatar.Root>
                                <Text>Menu</Text>
                            </Button>

                        </Drawer.Trigger>
                        <Portal>
                            <Drawer.Positioner>
                                <Drawer.Content>
                                    <Drawer.CloseTrigger />
                                    <Drawer.Header>
                                        <Drawer.Title />
                                    </Drawer.Header>
                                    <Drawer.Body>
                                        <VStack>
                                            <Link href="/dashboard/profile">Account</Link>
                                            <Link href="/dashboard/settings">Settings</Link>
                                            <Link href="/dashboard/logout">Logout</Link>
                                        </VStack>
                                    </Drawer.Body>
                                    <Drawer.Footer >
                                        <Drawer.CloseTrigger asChild>
                                            <CloseButton size="sm" />
                                        </Drawer.CloseTrigger>
                                    </Drawer.Footer> </Drawer.Content>
                            </Drawer.Positioner>
                        </Portal>
                    </Drawer.Root>
                </HStack>
            </HStack>
        </Container>
    </>)
}