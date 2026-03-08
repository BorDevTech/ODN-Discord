import { QrCode } from '@chakra-ui/react/'
import { ImageResponse } from 'next/og'


// Image metadata
export const alt = 'My site'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default function DisplayOG() {
    return new ImageResponse(
        (
            <QrCode.Root value="https://www.google.com">
                <QrCode.Frame>
                    <QrCode.Pattern />
                </QrCode.Frame>
            </QrCode.Root>
            // <div
            //     style={{
            //         height: "100%",
            //         width: "100%",
            //         display: "flex",
            //         flexDirection: "column",
            //         alignItems: "center",
            //         justifyContent: "center",
            //         backgroundColor: "white",
            //         padding: "40px",
            //     }}
            // >
            //     <div
            //         style={{
            //             fontSize: 60,
            //             fontWeight: "bold",
            //             color: "black",
            //             textAlign: "center",
            //         }}
            //     >
            //         Welcome to My Site
            //     </div>

            //     <div
            //         style={{
            //             fontSize: 30,
            //             color: "#666",
            //             marginTop: "20px",
            //         }}
            //     >
            //         Generated with Next.js ImageResponse for Open Graph
            //     </div>
            // </div>
        ),
        {
            ...size,
        }
    )
}

