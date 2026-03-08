'use client';

import {
    Avatar, Box, IconButton, Card, Image, Center,
    useFileUploadContext, Container, FileUpload, Float, Icon, AbsoluteCenter,
    Heading,
    DataList,
    Badge
} from "@chakra-ui/react/";
import { keyframes } from "@emotion/react";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { HiUpload } from "react-icons/hi";
import { LuX } from "react-icons/lu";

export default function Profile() {
    const [profileAvatar, setProfileAvatar] = useState<string | undefined>("https://avatars.githubusercontent.com/u/112635732?s=400&u=9c8e5b1a7c0d2e4f1a3b9c8e5b1a7c0d2e4f1a&v=4");
    const [premiumUserFlag, setPremiumUserFlag] = useState<boolean>(false);


    const FileUploadList = (uploadedFiles: File[]) => {
        if (!uploadedFiles) return null;
        if (uploadedFiles) {
            let fileType = uploadedFiles[0].type.split(".")[0];
            console.log(fileType);
            switch (fileType) {
                case "gif":
                    return setPremiumUserFlag(true)

                case "png":
                case "jpg":
                case "jpeg":
                default:
                    return setPremiumUserFlag(false)

            }
        };
    }

    const pulse = keyframes`
  0%   {  box-shadow: 0 0 4px rgba(255, 215, 0, 0.6); }
  50%  {  box-shadow: 0 0 8px rgba(255, 215, 0, 0.9); }
  100% {   box-shadow: 0 0 4px rgba(255, 215, 0, 0.6); }
`;
    return (

        <Container fluid>
            <Center>
                <Card.Root bg={'blue'} overflow="hidden" maxW={"sm"}   >
                    <Card.Header bg="gray.200" p={4}>
                        <Center>
                            <Avatar.Root boxSize={"fit-content"} shadow="xl" outline="0.2em solid" outlineColor="bg" rounded={"xl"} animation={`${pulse} 5s ease-in-out infinite`} bg="linear-gradient(135deg, #FFD700, #FFB700)" transformOrigin="center" >
                                <Float placement={"top-end"} offsetX="4" offsetY="4">
                                    <Icon size="xl" rounded={"full"} color={"white"} >
                                        <FaStar />
                                    </Icon >
                                </Float>
                                <Avatar.Image asChild>
                                    <Image
                                        src={profileAvatar}
                                        borderRadius="full"
                                        fit={"cover"}
                                        alt="User Avatar"
                                    />
                                </Avatar.Image>
                                <Avatar.Fallback name="Profile" />
                                <Float placement={"bottom-end"} offsetX="3" offsetY="3">
                                    <FileUpload.Root accept={["image/*"]} maxFiles={1} onFileAccept={(details) => {
                                        const file = details.files[0];
                                        if (!file) return;
                                        const preview = URL.createObjectURL(file);
                                        setProfileAvatar(preview);
                                        console.log("Accepted file:", file);
                                    }} >
                                        <FileUpload.HiddenInput />
                                        <FileUpload.Trigger asChild>
                                            <IconButton size="xl" rounded={"full"} colorPalette={"blue"} variant={'solid'}>
                                                <HiUpload />
                                            </IconButton>
                                        </FileUpload.Trigger>
                                        {/* <FileUpload.List /> */}
                                    </FileUpload.Root>
                                </Float>
                            </Avatar.Root>
                        </Center>
                    </Card.Header>

                    <Card.Body>
                        <DataList.Root orientation="vertical">
                            <DataList.Item>
                                <DataList.ItemLabel>
                                    Display Name
                                </DataList.ItemLabel>
                                <DataList.ItemValue>Ronald McDonald </DataList.ItemValue>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.ItemLabel>
                                    Bio
                                </DataList.ItemLabel>
                                <DataList.ItemValue>
                                    This is the user's profile description. It can include any relevant details they wish to share.
                                </DataList.ItemValue>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.ItemLabel>
                                    Interests
                                </DataList.ItemLabel>
                                <DataList.ItemValue gap={2}>
                                    <Badge>Good Spirits</Badge>
                                    <Badge>Profiteering</Badge>
                                </DataList.ItemValue>
                            </DataList.Item>
                        </DataList.Root>
                        <Box>
                            <Heading>
                                Public
                            </Heading>

                            <Card.Body>
                                <Card.Title>Display Name</Card.Title>
                                <Card.Title>Bio</Card.Title>
                                <Card.Title>Interests</Card.Title>
                                <Card.Description>
                                    This is the user's profile description. It can include information about the user, their interests, and any other relevant details they wish to share.
                                </Card.Description>
                            </Card.Body>
                        </Box>
                        <Box>
                            <Heading>
                                Private
                            </Heading>

                            <Card.Body>
                                <Card.Title>First Name</Card.Title>
                                <Card.Title>Last Name</Card.Title>
                                <Card.Title>Email</Card.Title>
                                <Card.Title>Bio</Card.Title>
                                <Card.Title>Interests</Card.Title>
                                <Card.Description>
                                    This is the user's profile description. It can include information about the user, their interests, and any other relevant details they wish to share.
                                </Card.Description>
                            </Card.Body>
                        </Box>



                    </Card.Body>
                </Card.Root>
            </Center >
        </Container >



    )
}

