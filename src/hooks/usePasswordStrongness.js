import { useState, useEffect } from "react";

import { strongestPassword, strongPassword } from "../data/regularExpressions";

const usePasswordStrongness = password => {
    const [strongness, setStrongness] = useState("Weak");

    useEffect(() => {
        setStrongness(
            strongestPassword.test(password)
                ? "Strongest"
                : strongPassword.test(password)
                ? "Strong"
                : "Weak"
        );
    }, [password]);

    return { strongness };
};

export default usePasswordStrongness;
