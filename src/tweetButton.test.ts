import {expect, test} from "@jest/globals";
import {tweetButton} from "./tweetButton";

test("tweetButton return a truthy value", ()=>{
    expect(tweetButton()).toBeTruthy();

});
