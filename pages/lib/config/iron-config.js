import React from 'react';

export const ironOptions = {
    cookieName: "ROOMMIE_COOKIE",
    password: "yPo4T7apfbdvctV1Bso1oAndQH9qwC94",
    // secure: true, // should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === "production" ? true: false,
    },
}