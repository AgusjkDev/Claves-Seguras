import { useState } from "react";

import { usePasswordStrongness } from "../hooks";

const PasswordInput = () => {
    const [password, setPassword] = useState("");
    const { strongness } = usePasswordStrongness(password);

    return (
        <div className="input-box relative flex w-3/4 items-center text-neutral-700 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4">
            <input
                type="password"
                required="required"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full rounded border-[1px] border-neutral-500 bg-transparent p-3.5 pr-10 text-sm outline-none"
            />

            <span className="pointer-events-none absolute mx-2 border-x-[1px] border-transparent px-1.5 text-sm transition-all duration-300">
                Tu contraseña
            </span>

            <div className="pointer-events-none absolute flex w-full justify-end">
                <img
                    alt={`${strongness} Password`}
                    src={`./imgs/${strongness.toLowerCase()}.svg`}
                    className="mr-2.5 w-6"
                />
            </div>
        </div>
    );
};

export default PasswordInput;
