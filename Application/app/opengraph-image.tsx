import { Card } from '@chakra-ui/react'
import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'My site'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element

            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    padding: "40px",
                }}
            >
                <div
                    style={{
                        fontSize: 60,
                        fontWeight: "bold",
                        color: "black",
                        textAlign: "center",
                    }}
                >
                    Welcome to My Site
                </div>

                <div
                    style={{
                        fontSize: 30,
                        color: "#666",
                        marginTop: "20px",
                    }}
                >
                    Generated with Next.js ImageResponse for Open Graph
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
        }
    )
}