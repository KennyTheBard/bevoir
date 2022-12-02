import { GitError, PushResult, simpleGit, TaskOptions } from 'simple-git';

export class VersionControlService {

   public async applyChanges(): Promise<PushResult> {
      simpleGit().add('-A').commit('').push(['-u', 'origin', 'master'], () => console.log('done'));

      return new Promise((resolve, reject) =>
         simpleGit()
            .add('-A')
            .commit('')
            .push(
               ['-u', 'origin', 'master'],
               (err: GitError | null, data: PushResult): void => {
                  if (err !== null) {
                     reject(err);
                  }

                  resolve(data);
               }
            ));
   }
}