import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatusComponent", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status={'test status'} />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('test status');
    });
});