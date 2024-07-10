import * as readline from 'readline';

export function sleep(message: string): Promise<void> {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(`${message}`, () => {
            rl.close();
            resolve();
        });
    });
}