/*
 * Gabe Dunn 2019
 * Object containing all commands and their functions.
 */

// TODO: gbp

import { expandCommands } from '../utils/expandCommands'

import { aboutCommand } from './about'
import { banCommand } from './ban'
import { buildInfoCommand } from './buildInfo'
import { buildRolesCommand } from './buildRoles'
import { clearWarnsCommand } from './clearWarns'
import { helpCommand } from './help'
import { lmgtfyCommand } from './lmgtfy'
import { muteCommand } from './mute'
import { pingCommand } from './ping'
import { pruneCommand } from './prune'
import { reportCommand } from './report'
import { roleCommand } from './role'
import { rolesCommand } from './roles'
import { statsCommand } from './stats'
import { tagCommand } from './tag'
import { tagsCommand } from './tags'
import { unbanCommand } from './unban'
import { unmuteCommand } from './unmute'
import { usersCommand } from './users'
import { warnCommand } from './warn'
import { warnsCommand } from './warns'

// Export an array with all of the commands.
export const commandsArray = [
  aboutCommand,
  banCommand,
  buildInfoCommand,
  buildRolesCommand,
  clearWarnsCommand,
  helpCommand,
  lmgtfyCommand,
  muteCommand,
  pingCommand,
  pruneCommand,
  reportCommand,
  roleCommand,
  rolesCommand,
  statsCommand,
  tagCommand,
  tagsCommand,
  unbanCommand,
  unmuteCommand,
  usersCommand,
  warnCommand,
  warnsCommand
]

// Export an array with all of the commands' aliases as keys.
export const commands = expandCommands(commandsArray)